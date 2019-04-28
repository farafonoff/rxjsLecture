import { Observable } from 'rxjs/Rx'
import { share, publish, refCount } from 'rxjs/operators'

const source = new Observable<MessageEvent>((observer) => {
    const socket = new WebSocket('ws://127.0.0.1:8001');
    socket.addEventListener('message', (e) => observer.next(e));
    return () => socket.close();
}).pipe(
    //share()
);
export function connection(): Observable<MessageEvent> {
    return source;
}