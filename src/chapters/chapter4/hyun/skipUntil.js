import { interval, timer } from 'rxjs';
import { skipUntil, take } from 'rxjs/operators';

const sourceIntervalTime = 300;

interval(sourceIntervalTime).pipe(
  // skipUntil(interval(sourceIntervalTime * 5)),
  skipUntil(timer(3000)), // 3초 뒤에 실행되는 값부터 데이터를 전달한다.  
  take(3)
)
.subscribe(
  x => console.log(x),
  err => console.log(err),
  () => console.log('complete')
);