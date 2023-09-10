import React from 'react';
import {gruvboxLight} from "@uiw/codemirror-theme-gruvbox-dark";
import {langs} from '@uiw/codemirror-extensions-langs';
import CodeMirror from "@uiw/react-codemirror";

const langConfigMap = {
    Golang: [langs.go()],
    JSON: [langs.json()],
    YAML: [langs.yaml()],
    Java: [langs.java()],
    Javascript: [langs.javascript({jsx: true})],
    CPP: [langs.cpp()],
    Python: [langs.python()],
}

function Code({text, lang, readOnly, onTextChange}) {
    const handleTextChange = (value) => {
        onTextChange(value);
    };

    return (
        <CodeMirror
            value={text}
            height="600px"
            theme={gruvboxLight}
            extensions={langConfigMap[lang]}
            onChange={handleTextChange}
            readOnly={readOnly}
        />
    );
}

export default Code;