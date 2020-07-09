import { range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// example 7
// 하단 코드처럼 pipe 내부에 연산자를 순서대로 사용해도 되며, pipe 함수로 감싸서 chainning 해도 된다.

let divisor = 2;

range(1, 10).pipe(
  filter(value => value % divisor === 0),
  map(value => (value + 1))
).subscribe(value => console.log(value));

// 위와 아래는 동일한 동작을 하는 코드
range(1, 10)
  .pipe(filter(value => value % divisor === 0))
  .pipe(map(value => (value + 1)))
  .subscribe(value => console.log(value))