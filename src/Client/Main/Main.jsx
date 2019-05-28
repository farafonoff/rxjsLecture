import React, {useState} from 'react';
import Pane from '../Pane/Pane'
import './Main.css'
import { send } from '../../utils/websocket';

export default () => {
    const [number, setNumber] = useState(1);
    const [inputText, updateText] = useState(1);
    return (
        <div class='page'>
            <button onClick={() => setNumber(number + 1)}>Add panel</button>
            <div class='main'>
                {Array(number).fill(1).map(() => <div class='main-item'><Pane /></div>)}
            </div>
            <div class='input-send'>
                <input type="text" onBlur={(event) => updateText(event.target.value)}></input>
                <button onClick={() => send(inputText)}>Send</button>
            </div>
        </div>);
}