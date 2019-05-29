import { Observable } from 'rxjs/Rx'
import { retryWhen, switchMap } from 'rxjs/operators'
import { timer } from 'rxjs';

const socket = new WebSocket('ws://127.0.0.1:8001');
const source = new Observable<MessageEvent>((observer) => {
    const listener = (e: MessageEvent) => observer.next(e);
    socket.addEventListener('message', listener);
    return () => socket.removeEventListener('message', listener);
}).pipe(
    retryWhen(errors => errors.pipe(
        switchMap(err => timer(1000))
    ))
    //share()
);
export function connection(): Observable<MessageEvent> {
    return source;
}

export function send(text: string) {
    socket.send(text);
}