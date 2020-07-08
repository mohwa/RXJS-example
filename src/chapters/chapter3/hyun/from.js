import { from } from 'rxjs';

// example 3 - 1
// from도 모든 데이터 탐색이 끝난 경우 자동으로 구독해제(complete)함수가 호출된다
from([{value: 1}, {value: 2}, {value: 3}, {value: 4}]).subscribe(
  value => console.log(`next ${value.value}`),
  err => console.error(err.message),
  () => console.log('completed')
);

// // example 3 - 2
// function* forLoopGen(start, end, increment){
//   for (let x = start; x <= end; x += increment){
//     yield x;
//   }
// }

// from(forLoopGen(1, 15, 2)).subscribe(
//   value => console.log(`next ${value}`),
//   err => console.error(err.message),
//   () => console.log('completed')
// )

// // example 3 - 3
// from ("Hello").subscribe(
//   value => console.log(`next ${value}`),
//   err => console.error(err.message),
//   () => console.log('completed')
// );

// // example 3 - 4
// from(new Promise((resolve) => {
//   console.log('promise1 function begin');
//   setTimeout(() => resolve('promise1 resolve'), 700);
//   console.log('promise1 function end');
// })).subscribe(
//   value => console.log(`[1] next ${value}`),
//   err => console.error(`[1] err: ${err.message}`),
//   () => console.log('[1] completed')
// );

// from(new Promise((resolve, reject) => {
//   console.log('promise2 function begin');
//   setTimeout(() => reject(new Error('promise2 reject')), 1200);
//   console.log('promise2 function end');
// })).subscribe(
//   value => console.log(`[2] next ${value}`),
//   err => console.error(`[2] err: ${err.message}`),
//   () => console.log('[2] completed')
// );