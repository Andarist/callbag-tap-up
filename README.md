# callbag-tap-up

Callbag operator which performs a side effect for every upwards emission (from sink to source), but other than that it acts as noop.

## Example

```js
import forEach from 'callbag-for-each'
import fromIter from 'callbag-from-iter'
import pipe from 'callbag-pipe'
import take from 'callbag-take'
import tapUp from 'callbag-tap-up'

pipe(
  fromIter([10, 20, 30, 40, 50]),
  tapUp(
    data => console.log(data), // always undefined in this example (forEach doesn't send anything up)
    err => console.log(err),
    () => console.log('unsubscribed'),
  ),
  take(2),
  forEach(values => {
    console.log(values) // 10, 20
  }),
)
```
