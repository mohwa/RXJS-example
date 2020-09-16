import { timer } from 'rxjs';

// example 8 - 1
// javascript의 setTimeout과 동일하게 시작된다.
// 다만 두번째 인자를 받을 경우 setInterval과 동일하게 주기적으로 실행하되, 첫번째 인자값만큼 대기 후, 두번째 인자값 시간으로 반복된다.
console.log('before timer');
timer(1000).subscribe(
  x => console.log(`timer(1000) next: ${x}`),
  err => console.error(`error.message: ${err.message}`),
  () => console.log('completed')
);

// example 8 - 2
// timer(1000, 500).subscribe(
//   x => console.log(`timer(1000, 500) next: ${x}`),
//   err => console.error(`error.message: ${err.message}`),
//   () => console.log('completed')
// );
