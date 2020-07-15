import { interval } from 'rxjs';
import { filter, takeWhile, takeLast } from 'rxjs/operators';

// 스트림데이터의 발췌된 데이터 목록중 뒤에서부터 데이터를 가져온다.
interval(300).pipe(
  filter(x => x >= 7 || x % 2 === 0),
  takeWhile(x => x <= 10),
  takeLast(3)
)
.subscribe(
  x => console.log(x),
  err => console.log(err),
  () => console.log('complete')
)