import { useState, useEffect } from 'react';
import { Observable } from 'rxjs/Rx';

export function useObservable(observable: Observable<any>, defaultValue: any) {
    const [state, setState] = useState(defaultValue);
    useEffect(() => {
        const subscription = observable.subscribe(val => setState(val))
        return () => subscription.unsubscribe();
    }, [ observable ])
    return state;
}