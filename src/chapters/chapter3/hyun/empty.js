import { empty, interval, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

// example 9
// 구독은 됐으나 바로 complete로 넘어감
// 다른 함수들과 연계해서 비어있는 옵저러블을 넘겨야 할 때 사용
empty().subscribe(
  x => console.log(`empty() next: ${x}`),
  err => console.error(`error.message: ${err.message}`),
  () => console.log('completed')
);

interval(1000).pipe(
  mergeMap(x => x < 5 ? of(x) : empty())
).subscribe(
  x => console.log(`timer(1000, 500) next: ${x}`),
  err => console.error(`error.message: ${err.message}`),
  () => console.log('completed')
);