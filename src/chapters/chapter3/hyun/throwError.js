import { throwError, interval, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

// example 11
// 무조건 error 처리로 넘어간다. error 로 넘어갔기때문에 자동 구독 해제 된다.
throwError(new Error('throw error')).subscribe(
  x => console.log(`throw(err) next: ${x}`),
  err => console.error(`error.message: ${err.message}`),
  () => console.log('completed')
);

interval(1000).pipe(
  mergeMap(x => x < 5 ? of(x) : throwError(new Error('throw error')))
).subscribe(
  x => console.log(`interval(1000) next: ${x}`),
  err => console.error(`error.message: ${err.message}`),
  () => console.log('completed')
);