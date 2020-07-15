import { interval } from 'rxjs';
import { take, debounce, tap } from 'rxjs/operators';

const sourceInterval = 400;

// 
interval(sourceInterval).pipe(
  take(4),
  debounce(srcVal => interval(
    srcVal % 2 === 0 ? sourceInterval * 1.2 : sourceInterval * 0.8
  ).pipe(
    tap(innerVal => console.log(`
      sourceInterval value: ${srcVal},
      internalInterval value: ${innerVal}
    `))
  ))
)
.subscribe(
  x => console.log(x),
  err => console.log(err),
  () => console.log('complete')
);