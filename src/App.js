import './App.css';
import {useState} from "react";
import {Card, Menu} from 'antd';
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
        </div>
    );
}

export default App;
