import React from 'react';
import { useChatLog } from '../../utils/wshook'
export default () => {
    const log = useChatLog(10);
    return (<div>
        {log.map(line => <div>{line}</div>)}
    </div>);
}
