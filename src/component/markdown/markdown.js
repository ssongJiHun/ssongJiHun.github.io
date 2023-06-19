import styled from '@emotion/styled';

const COLORS = {
  MAIN: '#f5f5f8',
  SUB: '#e4f1ff',
  SUB_MIDDLE_BOLD: '#badcff',
  SUB_BOLD: '#0E68C8',
  WHITE: '#ffffff',
  BLACK: '#000000',
  GRAY: '#e2e5e6',
  GRAY_BOLD: '#757575',
  SHADOW: 'rgba(82,82,82,0.75)',
};

const MarkdownHTML = styled.div`
display: flex;
flex-direction: column;
width: 100%;
word-break: break-all;

// Markdown Style
line-height: 1.8;
font-size: 16px;
font-weight: 400;

// Apply Padding Attribute to All Elements
p {
  padding: 3px 0;
}

img {
  max-width: 100%;
}

blockquote {
  margin: 2rem 0px;
  padding: 1rem 1rem 1rem 2rem;
  border-left: 4px solid #ddd;
  color: #777;
}
    
// Adjust List Element Style
ol,
ul {
  list-style-type : disc;
  margin-left: 20px;
  padding: 10px 0;
}

// Adjust Horizontal Rule style
hr {
  border: none;
    height: 1px;
    width: 100%;
    background: #dee2e6;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

// Adjust Link Element Style
a {
  color: #4263eb;
  text-decoration: underline;
}

/* Code Block Highlighting */
pre[class*='language-'],
code[class*='language-'] {
  color: #d4d4d4;
  font-size: 13px;
  font-family: Menlo, Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono',
    'Courier New', monospace;
  direction: ltr;
  white-space: pre;
  text-align: left;
  text-shadow: none;
  word-break: normal;
  word-spacing: normal;
  tab-size: 4;
  hyphens: none;
  border-radius: 0.5rem;
}

pre[class*='language-']::selection,
code[class*='language-']::selection,
pre[class*='language-'] *::selection,
code[class*='language-'] *::selection {
  text-shadow: none;
  background: #264f78;
}

@media print {
  pre[class*='language-'],
  code[class*='language-'] {
    text-shadow: none;
  }
}

pre[class*='language-'] {
  padding: 1rem;
  overflow: auto;
  background: #1e1e1e;
}

:not(pre) > code[class*='language-'] {
  padding: 0.1em 0.3em;
  background: #1e1e1e;
  border-radius: 0;
  border-radius: 0.3em;
}

/* COED TOKEN */
.namespace {
    opacity: 0.7;
  }

  .token.doctype .token.doctype-tag {
    color: #569cd6;
  }

  .token.doctype .token.name {
    color: #9cdcfe;
  }

  .token.comment,
  .token.prolog {
    color: #6a9955;
  }

  .token.punctuation,
  .language-html .language-css .token.punctuation,
  .language-html .language-javascript .token.punctuation {
    color: #d4d4d4;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.inserted,
  .token.unit {
    color: #b5cea8;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.deleted {
    color: #ce9178;
  }

  .language-css .token.string.url {
    text-decoration: underline;
  }

  .token.operator,
  .token.entity {
    color: #d4d4d4;
  }

  .token.operator.arrow {
    color: #569cd6;
  }

  .token.atrule {
    color: #ce9178;
  }

  .token.atrule .token.rule {
    color: #c586c0;
  }

  .token.atrule .token.url {
    color: #9cdcfe;
  }

  .token.atrule .token.url .token.function {
    color: #dcdcaa;
  }

  .token.atrule .token.url .token.punctuation {
    color: #d4d4d4;
  }

  .token.keyword {
    color: #569cd6;
  }

  .token.keyword.module,
  .token.keyword.control-flow {
    color: #c586c0;
  }

  .token.function,
  .token.function .token.maybe-class-name {
    color: #dcdcaa;
  }

  .token.regex {
    color: #d16969;
  }

  .token.important {
    color: #569cd6;
  }

  .token.italic {
    font-style: italic;
  }

  .token.constant {
    color: #9cdcfe;
  }

  .token.class-name,
  .token.maybe-class-name {
    color: #4ec9b0;
  }

  .token.console {
    color: #9cdcfe;
  }

  .token.parameter {
    color: #9cdcfe;
  }

  .token.interpolation {
    color: #9cdcfe;
  }

  .token.punctuation.interpolation-punctuation {
    color: #569cd6;
  }

  .token.boolean {
    color: #569cd6;
  }

  .token.property,
  .token.variable,
  .token.imports .token.maybe-class-name,
  .token.exports .token.maybe-class-name {
    color: #9cdcfe;
  }

  .token.selector {
    color: #d7ba7d;
  }

  .token.escape {
    color: #d7ba7d;
  }

  .token.tag {
    color: #569cd6;
  }

  .token.tag .token.punctuation {
    color: #808080;
  }

  .token.cdata {
    color: #808080;
  }

  .token.attr-name {
    color: #9cdcfe;
  }

  .token.attr-value,
  .token.attr-value .token.punctuation {
    color: #ce9178;
  }

  .token.attr-value .token.punctuation.attr-equals {
    color: #d4d4d4;
  }

  .token.entity {
    color: #569cd6;
  }

  .token.namespace {
    color: #4ec9b0;
  }
  /*********************************************************
* Language Specific
*/

  pre[class*='language-javascript'],
  code[class*='language-javascript'],
  pre[class*='language-jsx'],
  code[class*='language-jsx'],
  pre[class*='language-typescript'],
  code[class*='language-typescript'],
  pre[class*='language-tsx'],
  code[class*='language-tsx'] {
    color: #9cdcfe;
  }

  pre[class*='language-css'],
  code[class*='language-css'] {
    color: #ce9178;
  }

  pre[class*='language-html'],
  code[class*='language-html'] {
    color: #d4d4d4;
  }

  .language-regex .token.anchor {
    color: #dcdcaa;
  }

  .language-html .token.punctuation {
    color: #808080;
  }
  /*********************************************************
* Line highlighting
*/
  pre[class*='language-'] > code[class*='language-'] {
    position: relative;
    z-index: 1;
  }

  .line-highlight.line-highlight {
    z-index: 0;
    background: #f7ebc6;
    box-shadow: inset 5px 0 0 #f7d87c;
  }

  pre[class*='language-text'],
  code[class*='language-text'] {
    padding: 0.25rem;
    color: ${COLORS.BLACK};
    background-color: ${COLORS.GRAY};
    font-size: 85%;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
    }

    pre[class*='language-'] {
      width: 100%;
      overflow-x: auto;
    }
  }
`;

export default MarkdownHTML;