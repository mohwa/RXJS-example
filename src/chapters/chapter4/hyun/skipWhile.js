import { interval } from 'rxjs';
import { skipWhile, take } from 'rxjs/operators';

// 범위 만큼 건너뛴다.
interval(300).pipe(
  skipWhile(x => x < 10),
  take(3)
)
.subscribe(
  x => console.log(x),
  err => console.log(err),
  () => console.log('complete')
);