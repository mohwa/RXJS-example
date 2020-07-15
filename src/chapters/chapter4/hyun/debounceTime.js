import { interval } from 'rxjs';
import { take, debounceTime } from 'rxjs/operators';

interval(400).pipe(
  take(4),
  debounceTime(300)
)
.subscribe(
  x => console.log(`interval(400).pipe(take(4),debounceTime(300)) next: ${x}`),
  err => console.log(err),
  () => console.log('complete')
)

interval(400).pipe(
  take(4),
  debounceTime(500)
)
.subscribe(
  x => console.log(`-- interval(400).pipe(take(4),debounceTime(500)) next: ${x}`),
  err => console.log(err),
  () => console.log('complete')
)