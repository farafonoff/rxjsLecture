import { marbles } from "rxjs-marbles/jest";
import { map } from "rxjs/operators";

describe("rxjs-marbles", () => {
    it("is cold", marbles(m => {
        const cold = m.hot("--a--b--c");
        cold
            .subscribe(
                v => console.log(v),
                err => console.log(err),
                done => console.log("completed")
            )
        cold
            .subscribe(
                v => console.log(v),
                err => console.log(err),
                done => console.log("completed")
            )
    }))
});
