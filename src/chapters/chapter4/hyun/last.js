import { range } from 'rxjs';
import { last } from 'rxjs/operators';

// 실행되는 스트림중 마지막 데이터만 구독한다.
range(1, 10).pipe(
  last()
)
.subscribe(x => console.log(x));

// 실행되는 스트림중 true가 되는 마지막 데이터만 구독한다.
// range(1, 10).pipe(
//   last(x => x <= 3)
// )
// .subscribe(x => console.log(x));