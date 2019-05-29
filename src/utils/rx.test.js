import { from } from 'rxjs'
import { map, filter } from 'rxjs/operators'

from([1,2,3]).pipe(
    filter(x => x%2 === 0),
    map(x => x+1),
)

