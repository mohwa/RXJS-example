import { interval } from 'rxjs';
import { filter, takeWhile } from 'rxjs/operators';

// true가 되는 데이터스트림만 가져온다.
// 책에서 설명하는 부분은 오타가 있다.
// takeWhile에서 7~10 데이터를 가져오는것이 아니라, filter에서 걸러진 데이터가 2,4,6,7,8,9,10... 이며
// 가져오는 데이터 범위를 지정한것이 takeWhile 이다.
interval(300).pipe(
  filter(x => x >= 7 || x % 2 === 0),
  takeWhile(x => x <= 10)
)
.subscribe(
  x => console.log(x),
  err => console.log(err),
  () => console.log('complete')
)