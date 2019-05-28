import { map } from "rxjs/operators";

export function logBuffer(bufferLength) {
    let buffer = [];
    return map(line => {
        buffer.push(line);
        buffer = buffer.slice(-limit);
        return [...buffer];
    });
}