import { range } from 'rxjs';
import { filter } from 'rxjs/operators';

// true가 되는 스트림 데이터만 구독되도록 한다.
range(1, 5).pipe(
  filter(x => x % 2 === 0),
)
.subscribe(
  x => console.log(x),
  err => console.log(err),
  () => console.log('complete')
);