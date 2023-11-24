const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require("fs");
const crypto = require('crypto');

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion, config: { convertImagesToBase64: true } }); // image to base64
const dirName = './_static/post';

(async () => {
    const hash = async (buffer) => {
        const sha256 = crypto.createHash('sha256');
        sha256.update(buffer);
        return sha256.digest('hex');
    }

    // create directory
    if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName, { recursive: true });
    }

    // access notion database
    const databaseId = process.env.NOTION_BLOG_DB_ID;
    const { results: pages } = await notion.databases.query({
        database_id: databaseId,
        filter: {
            property: "공개",
            checkbox: {
                equals: true,
            },
        },
    });

    for (const page of pages) {
        // frontmatter
        const title = page.properties['타이틀'].title[0].plain_text;
        const tags = page.properties['태그'].multi_select.map(v => v.name).join(', ');
        const created = page.properties['날짜'].date.start;
        const frontmatter = '---\n'
            + 'template : "post"\n'
            + `title : "${title}"\n`
            + 'category : ""\n'
            + `tags : "${tags}"\n`
            + `created: "${created}"\n`
            + '---'

        // content
        const mdblocks = await n2m.pageToMarkdown(page.id);
        const mdString = frontmatter.concat('\n', n2m.toMarkdownString(mdblocks).parent);
        const newTitle = title.replace(/ |\\|\/|\:|\*|\?|\"|\<|\>|\|/g, (m) => m !== ' ' ? btoa(m) : '_') + created;
        const fileName = `${dirName}/${newTitle}.md`;

        // exsists md file
        if (fs.existsSync(fileName)) {
            const notionHash = await hash(Buffer.from(mdString));
            const repoHash = await hash(fs.readFileSync(fileName));

            if (notionHash === repoHash) {
                console.log('equal file content', fileName)
                continue;
            }
        }

        // write md file 
        fs.writeFile(fileName, mdString, (err) => {
            if (err) console.log('fail wrting file', fileName)
            else console.log('success writing file', fileName)
        });
    }
})();