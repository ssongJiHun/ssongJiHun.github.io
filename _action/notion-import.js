const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require("fs");

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });
const dirName = './_static/post';

(async () => {
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
            + 'template : "post\n'
            + `title : ${title}\n`
            + 'category : ""\n'
            + `tags : "${tags}\n`
            + `created: ${created}`
            + '---'

        // content
        const mdblocks = await n2m.pageToMarkdown(page.id);
        const mdString = frontmatter.concat('\n', n2m.toMarkdownString(mdblocks).parent);

        // write md file 
        const fileName = `${dirName}/${title.replace(/ /g, '_') + created}.md`;
        fs.writeFile(fileName, mdString, (err) => {
            if (err) console.log('fail wrting file')
            else console.log('success writing file')
        });
    }
})();