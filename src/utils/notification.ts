import { map, switchMap, filter, publish, refCount, shareReplay, toArray, publishReplay, bufferTime } from "rxjs/operators";
import { pipe, UnaryFunction, OperatorFunction } from "rxjs";

export function notifications(time: number) {
    return pipe(
        bufferTime(time),
        filter(messages => messages.length > 0),
        map(messages => messages.length > 1?
            `You've got ${messages.length} messages`: 
            `New message: ${messages[0]}`)
    );
}
