import { range } from 'rxjs';

// example 6
// 시작값, 루프 횟수, 스케쥴러 순서로 인자값을 받아서 사용
// 구독이 시작됨과 동시에 range값으로 notify를 하며, 루프가 끝나게 되면 자동으로 complete가 실행이 된다.
console.log('before range(1,5)');
range(1, 5).subscribe(
  x => console.log(`range(1,5) next: ${x}`),
  err => console.error(`error.message: ${err.message}`),
  () => console.log('completed')
);
console.log('after range(1,5)');

console.log('before range(2,5)');
range(2, 5).subscribe(
  x => console.log(`range(2,5) next: ${x}`),
  err => console.error(`error.message: ${err.message}`),
  () => console.log('completed')
);
console.log('after range(2,5)');