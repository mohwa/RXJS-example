import { NEVER, interval, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

// example 10
// 아무것도 안하는 옵저러블을 만들어야할 때 사용 (???)
NEVER.subscribe(
  x => console.log(`NEVER next: ${x}`),
  err => console.error(`error.message: ${err.message}`),
  () => console.log('completed')
);
console.log('after subscribe()');

interval(1000).pipe(
  mergeMap(x => x % 2 === 1 ? of(x) : NEVER)
).subscribe(
  x => console.log(`timer(1000, 500) next: ${x}`),
  err => console.error(`error.message: ${err.message}`),
  () => console.log('completed')
);