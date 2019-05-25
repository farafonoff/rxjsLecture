import { pipe } from "rxjs";
import { map, tap } from "rxjs/operators";

export function logArray(limit) {
    let buffer = [];
    return pipe(
        tap(console.log),
        map(message => message.data),
        map(line => {
            buffer.push(line);
            buffer = buffer.slice(-limit);
            return [...buffer];
        }),
        tap(console.log),
    );
}