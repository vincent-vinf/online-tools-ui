import './App.css';
import React, {useState} from "react";
import {Button, Card, Menu} from 'antd';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCode, faFileCode} from '@fortawesome/free-solid-svg-icons'
import Format from "./Format";
import Codec from "./Codec";

const items = [
    {
        label: 'Code Format',
        key: 'format',
        icon: <FontAwesomeIcon icon={faCode}/>,
    },
    {
        label: "Codec",
        key: 'codec',
        icon: <FontAwesomeIcon icon={faFileCode}/>,
    }
]

function App() {
    const [currentMenu, setCurrentMenu] = useState('format');
    const onClickMenu = (e) => {
        setCurrentMenu(e.key);
    };

    return (
        <div id="main">
            <Menu id="main-menu" onClick={onClickMenu} selectedKeys={[currentMenu]} mode="horizontal" items={items}/>

            <Card id="body">
                {currentMenu === 'format' ? <Format></Format> : <div></div>}
                {currentMenu === 'codec' ? <Codec></Codec> : <div></div>}
            </Card>
            <div style={{padding: "8px"}}></div>
            <Button type="text"
                    icon={<img style={{height: "14px", width: "14px"}} src="/icp.png" alt={"备案"}></img>}
                    href="https://beian.miit.gov.cn/">
                浙ICP备20023601号
            </Button>
            <div style={{padding: "16px"}}></div>
        </div>
    );
}

export default App;
