import React from 'react';
import { useChatLog } from '../../utils/wshook'
export default () => {
    const log = useChatLog(10);
    return (log.map(line => <div>{line}</div>))
}
