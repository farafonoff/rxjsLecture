import React, { useState, useEffect } from 'react';
import { connection } from './websocket';
export function useChatLog(depth: number) {
    const [buffer, setBuffer] = useState([]);
    useEffect(() => {
        let _buffer: string[] = [];
        const subscription = connection().subscribe((message: MessageEvent) => {
            const newBuffer = [..._buffer];
            console.log(newBuffer);
            console.log(message);
            newBuffer.push(message.data);
            if (newBuffer.length > depth) {
                newBuffer.splice(0,1);
            }
            console.log(newBuffer);
            setBuffer(<any>newBuffer);
            _buffer = newBuffer;
        });
        return () => subscription.unsubscribe();
    }, [depth]);
    return buffer;
}