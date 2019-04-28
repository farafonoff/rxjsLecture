import React, {useState} from 'react';
import Pane from '../Pane/Pane'
import './Main.css'

export default () => {
    const [number, setNumber] = useState(1);
    return (
        <div class='page'>
            <button onClick={() => setNumber(number + 1)}>Add panel</button>
            <button onClick={() => setNumber(number - 1)}>Remove panel</button>
            <div class='main'>
                {Array(number).fill(1).map(() => <div class='main-item'><Pane /></div>)}
            </div>
        </div>);
}