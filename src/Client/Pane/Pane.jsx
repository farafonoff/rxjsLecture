import React from 'react';
import { useObservable } from '../../utils/wshook'
import { connection } from '../../utils/websocket'
import { logBuffer } from '../../utils/chatlog'
import { map } from 'rxjs/operators'
export default () => {
    const log = useObservable(connection().pipe(
        map(message => message.data),
        logBuffer(10)
    ), []);
    return (<div>
        {log.map(line => <div>{line}</div>)}
    </div>);
}
