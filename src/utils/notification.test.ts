import { marbles, fakeSchedulers } from "rxjs-marbles/jest";
import { map, switchMap, filter, publish, refCount, shareReplay, toArray, publishReplay } from "rxjs/operators";
import { Observable, timer, from, Subject, BehaviorSubject, ReplaySubject } from "rxjs";
import { notifications } from "./notification";

describe("notification", () => {
    beforeEach(() => jest.useFakeTimers());
    it("should work", marbles(m => {
        const cold = m.cold("a------bc------t------def--------ghi|");
        cold.pipe(
            notifications(5)
        ).subscribe(console.log)
    }));
    /*
    New message: a
    You've got 2 messages
    New message: t
    You've got 3 messages
    You've got 3 messages
    */
});