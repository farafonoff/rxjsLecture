import React, { useState, useEffect } from 'react';
import { connection } from './websocket';
import { Observable } from 'rxjs/Rx';
export function useChatLog(depth: number) {
    const [buffer, setBuffer] = useState<string[]>([]);
    useEffect(() => {
        let _buffer: string[] = buffer;
        const subscription = connection().subscribe((message: MessageEvent) => {
            _buffer.push(message.data);
            _buffer = _buffer.slice(-depth);
            setBuffer(_buffer);
        });
        return () => subscription.unsubscribe();
    }, [depth]);
    return buffer;
}

export function useObservable(observable: Observable<any>, defaultValue: any) {
    const [state, setState] = useState(defaultValue);
    useEffect(() => {
        console.log('effegd');
        const subscription = observable.subscribe(val => setState(val))
        return () => subscription.unsubscribe();
    }, [])
    return state;
}