import { interval } from 'rxjs';
import { skip, take } from 'rxjs/operators';

// 데이터 스트림을 파라미터만큼 건너 뛴 후 받을 수 있다.
interval(300).pipe(
  skip(3),
  take(2)
)
.subscribe(
  x => console.log(x),
  err => console.log(err),
  () => console.log('complete')
);