import React from 'react';
import { useObservable } from '../../utils/wshook'
import { connection } from '../../utils/websocket'
import { logArray } from '../../utils/chatlog'
export default () => {
    const log = useObservable(connection().pipe(
        logArray(10)
    ), []);
    return (<div>
        {log.map(line => <div>{line}</div>)}
    </div>);
}
