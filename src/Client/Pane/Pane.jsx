import React from 'react';
import { useObservable } from '../../utils/wshook'
import { connection } from '../../utils/websocket'
import { logBuffer } from '../../utils/chatlog'
export default () => {
    const log = useObservable(connection().pipe(
        logBuffer(10)
    ), []);
    return (<div>
        {log.map(line => <div>{line}</div>)}
    </div>);
}
