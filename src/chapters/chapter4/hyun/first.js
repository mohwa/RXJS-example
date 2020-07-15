import { range } from 'rxjs';
import { first } from 'rxjs/operators';

// 실행되는 스트림중 첫번째 데이터만 구독한다.
range(1, 10).pipe(
  first()
)
.subscribe(x => console.log(x));

// 실행되는 스트림중 true가 되는 첫번째 데이터만 구독한다.
// range(1, 10).pipe(
//   first(x => x >= 3)
// )
// .subscribe(x => console.log(x));