import { of, asapScheduler } from 'rxjs';

// example 2 - 1
// create를 제외한 생성함수에서는 탐색이 끝난 경우 자동으로 구독해제(complete)함수가 호출된다
console.log('BEFORE call subscribe()');
of(1, 2, 'a', 'b', 3, 4, ['array1', 'array2']).subscribe(
  value => console.log(`next ${value}`),
  err => console.error(err.message),
  () => console.log('completed')
);
console.log('AFTER call subscribe()');

// // example 2 - 2
// // of의 마지막 인자 타입이 rxjs의 스케쥴러 타입이면 해당 of의 처리는 비동기처리가 된다.
// console.log('BEFORE call subscribe()');
// of(1, 2, 'a', 'b', 3, 4, ['array1', 'array2'], asapScheduler).subscribe(
//   value => console.log(`next ${value}`),
//   err => console.error(err.message),
//   () => console.log('completed')
// );
// console.log('AFTER call subscribe()');
