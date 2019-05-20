import { marbles, fakeSchedulers } from "rxjs-marbles/jest";
import { map, switchMap, filter, publish, refCount, shareReplay, toArray, publishReplay } from "rxjs/operators";
import { Observable, timer, from, Subject, BehaviorSubject, ReplaySubject } from "rxjs";

describe("rxjs-marbles", () => {
    beforeEach(() => jest.useFakeTimers());
    it("is cold", marbles(m => {
        const cold = m.cold("-a-b-c-|");
        

        cold.subscribe(
                v => console.log('COLD immediate', v)
            )
        timer(2)
        .pipe(
            switchMap(() => cold)
        ).subscribe(
                v => console.log('COLD delayed  ', v)
            )
    }))
    it("is hot", marbles(m => {
        const cold = m.hot("-a-b-c-d-e-|");
        

        cold.subscribe(
                v => console.log('HOT immediate', v)
            )
        timer(5)
        .pipe(
            switchMap(() => cold)
        ).subscribe(
                v => console.log('HOT delayed  ', v)
            )
    }))
    it("js works", () => {
        const source = [1,2,3]
        const result = source
                .filter(x => x % 2 === 1)
                .map(x => x + 1);
        console.log(result)
    })
    it("rx works", () => {
        const source = [1,2,3]
        const result = from(source).pipe(
            filter(x => x % 2 === 1),
            map(x => x + 1),
            toArray()
        )
        result.subscribe(console.log)
    })
    function incrementOdd(incBy) {
        return pipe(
            filter(x => x % 2 === 1),
            map(x => x + incBy)
        )
    }
    it("pipe works", () => {
        const source = [1,2,3]
        const result = from(source).pipe(
            incrementOdd(1),
            toArray()
        )
        result.subscribe(console.log)
    })
    it("warm", marbles(m => {
        const cold = m.cold("-a-b-c-|");
        const warm = new Subject();
        cold.subscribe(warm);

        warm.subscribe(
            v => console.log('WARM immediate', v)
        )

        timer(2)
        .pipe(
            switchMap(() => warm)
        ).subscribe(
                v => console.log('WARM delayed  ', v)
        )
    }))
    it("warmer", marbles(m => {
        const cold = m.cold("-a-b-c-|");
        const warm = cold.pipe(
            publishReplay(1),
            refCount(),
        );
        

        warm.subscribe(
            v => console.log('WARMER immediate', v)
        )

        timer(2)
        .pipe(
            switchMap(() => warm)
        ).subscribe(
                v => console.log('WARMER delayed  ', v)
        )
    }))
});
