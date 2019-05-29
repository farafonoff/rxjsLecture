import { Observable } from 'rxjs/Rx'
import { retryWhen, switchMap } from 'rxjs/operators'
import { timer } from 'rxjs';

let socket: WebSocket;

const source = new Observable<MessageEvent>((observer) => {
    socket = new WebSocket('ws://127.0.0.1:8001');
    const listener = (e: MessageEvent) => observer.next(e);
    socket.addEventListener('message', listener);
    socket.addEventListener('close', () => observer.error('disconnect'))
    socket.addEventListener('error', () => observer.error('disconnect'))
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