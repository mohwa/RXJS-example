import { interval } from 'rxjs';

// example 6
// pipe 함수는 내부에 구현된 rxjs 연산자를 순차적으로 호출해주는 함수
// pipe 함수 안에서만 쓸수있는 연산자 함수를 파이퍼블 연산자라고 부름
// 그중 하나인 filter는 기존 javascript의 filter와 동일하게 return true일 때 전달된 값을 전달함

let divisor = 2;

setInterval(() => {
  divisor = (divisor + 1) % 10;
  console.log('divisor', divisor);
}, 500);

interval(700).pipe(
  filter(value => {
    console.log('filter', value);
    return value % divisor === 0;
  })
).subscribe(value => console.log(value));