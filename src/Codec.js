import React, {useState} from "react";
import {Button, Col, message, Row} from "antd";
import Code from "./Code";
import {Base64} from 'js-base64';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesLeft, faAnglesRight} from "@fortawesome/free-solid-svg-icons";

const encodings = ['Base64']

function encodeBase64(text) {
    try {
        return Base64.encode(text);
    } catch (error) {
        message.warning("invalid string")
        console.error('invalid string:', error);
        return "";
    }
}

function decodeBase64(text) {
    try {
        return Base64.decode(text);
    } catch (error) {
        message.warning("invalid string")
        console.error('invalid string:', error);
        return "";
    }
}


function Codec() {
    const [text, setText] = useState("");
    const [encoding, setEncoding] = useState(encodings[0]);
    // const [activeButtonIndex, setActiveButtonIndex] = useState(encodings[0]);
    const [resultText, setResultText] = useState("")

    const onClickEncoding = (text) => {
        setEncoding(text)
    };

    const encode = () => {
        switch (encoding) {
            case 'Base64':
                setResultText(encodeBase64(text))
                break
            default:
                message.warning("unknown encoding")
        }
    }
    const decode = () => {
        switch (encoding) {
            case 'Base64':
                setText(decodeBase64(resultText))
                break
            default:
                message.warning("unknown encoding")
        }
    }

    return (
        <div>
            <Row>
                <Col flex="auto">
                    <Row gutter={16}>
                        {encodings.map((text, index) => (
                            <Col key={index}>
                                <Button type="text" size="large"
                                        onClick={() => onClickEncoding(text)}
                                        className={encoding === text ? 'active-lang-button' : "lang-button"}
                                >
                                    {text}
                                </Button>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col flex="1px">

                </Col>
            </Row>
            <div style={{padding: "8px"}}></div>
            <Row gutter={16}>
                <Col flex="auto">
                    <Code text={text} lang='' onTextChange={setText}></Code>
                </Col>
                <Col flex="50px">
                    <Button type="primary" size="large" style={{backgroundColor: "#7dba4b", fontWeight: "bold"}}
                            onClick={() => encode()}
                            icon={<FontAwesomeIcon icon={faAnglesRight} fade/>}
                    >
                        Encode
                    </Button>
                    <div style={{padding: "6px"}}></div>
                    <Button type="primary" size="large" style={{backgroundColor: "#7dba4b", fontWeight: "bold"}}
                            onClick={() => decode()}
                            icon={<FontAwesomeIcon icon={faAnglesLeft} fade/>}
                    >
                        Decode
                    </Button>
                </Col>
                <Col flex="auto">
                    <Code text={resultText} lang='' onTextChange={setResultText}></Code>
                </Col>
            </Row>
        </div>
    );
}

export default Codec;