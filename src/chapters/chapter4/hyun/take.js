import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

// 내가 원하는 갯수만 가져오는 연산자다.
// take 명칭이 붙은 연산자들은 데이터를 다 가져오면 옵저러블의 complete를 실행시킨다.
interval(1000).pipe(
  take(5)
)
.subscribe(
  x => console.log(x),
  err => console.log(err),
  () => console.log('complete')
);