import React, {useState} from "react";
import {Button, Col, message, Row} from "antd";
import yaml from "js-yaml";
import Code from "./Code";

const unknownLang = ""
const languages = ['JSON', 'YAML', 'Golang', 'Java', 'Javascript', 'CPP', 'Python']

function formatJSON(jsonString) {
    try {
        const parsedJSON = JSON.parse(jsonString);
        return JSON.stringify(parsedJSON, null, 2);
    } catch (error) {
        message.warning("invalid JSON string")
        console.error('Invalid JSON string:', error);
        return "";
    }
}

function formatYAML(yamlString) {
    try {
        const parsedYAML = yaml.load(yamlString);
        return yaml.dump(parsedYAML, {indent: 2});
    } catch (error) {
        message.warning("invalid YAML string")
        console.error('Invalid YAML string:', error);
        return '';
    }
}

function Format() {
    const [text, setText] = useState("");
    const [lang, setLang] = useState(unknownLang);
    const autodetectLang = "Autodetect"
    const [activeButtonIndex, setActiveButtonIndex] = useState(autodetectLang);
    const [resultText, setResultText] = useState("")
    const handleCodeTextChange = (text) => {
        setText(text);
    };
    const onClickLang = (text) => {
        if (text === autodetectLang) {
            setLang(unknownLang)
        } else {
            setLang(text)
        }
        setActiveButtonIndex(text);
    };

    const formatText = () => {
        switch (lang) {
            case 'Golang':
                break
            case 'JSON':
                setResultText(formatJSON(text))
                break
            case 'YAML':
                setResultText(formatYAML(text))
                break
            default:
                message.warning("unknown language")
        }
    }

    return (
        <div>
            <Row>
                <Col flex="auto">
                    <Row gutter={16}>
                        <Col>
                            <Button type="text" size="large"
                                    onClick={() => onClickLang(autodetectLang)}
                                    className={activeButtonIndex === autodetectLang ? 'active-lang-button' : "lang-button"}
                            >
                                Autodetect
                            </Button>
                        </Col>
                        {languages.map((text, index) => (
                            <Col key={index}>
                                <Button type="text" size="large"
                                        onClick={() => onClickLang(text)}
                                        className={activeButtonIndex === text ? 'active-lang-button' : "lang-button"}
                                >
                                    {text}
                                </Button>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col flex="1px">
                    <Button type="primary" size="large" style={{backgroundColor: "#7dba4b", fontWeight: "bold"}}
                            onClick={() => formatText()}
                    >
                        Format
                    </Button>
                </Col>
            </Row>
            <div style={{padding: "8px"}}></div>
            <Row gutter={16}>
                <Col span={12}>
                    <Code text="" lang={lang} onTextChange={handleCodeTextChange}></Code>
                </Col>
                <Col span={12}>
                    <Code text={resultText} lang={lang} readOnly></Code>
                </Col>
            </Row>
        </div>
    );
}

export default Format;