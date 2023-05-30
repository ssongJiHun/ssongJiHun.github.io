import React from 'react';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const MDEditor = () => {
    const editorRef = React.useRef();
    const handleClickButton = () => {
        let fileName = '파일이름.md';
        let output = editorRef.current.getInstance().getMarkdown();
        const element = document.createElement('a');
        const file = new Blob([output], {
            type: 'text/plain',
        });
        element.href = URL.createObjectURL(file);
        element.download = fileName;
        document.body.appendChild(element); // FireFox
        element.click();
    };

    return (
        <div>
            MD-EDITOR
            <Editor
                previewStyle="tab"
                height="600px"
                initialEditType="markdown"
                useCommandShortcut={true}
                ref={editorRef}
            />
            <button onClick={handleClickButton}  >Click!</button>
        </div>
    )
}

export default MDEditor;