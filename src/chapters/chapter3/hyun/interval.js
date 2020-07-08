import { interval } from 'rxjs';

// example 7
// javascript의 setInterval과 동일하게 내부 인자값을 ms로 구분하여 구독된 함수를 인자값의 시간 간격으로 실행한다.
// 다만 함수 실행과 동시에 시작이 아니라, 함수가 실행 된 후 정확히는 아니지만 인자값의 시간이 지난 후 시작이 된다.
console.time('test')
interval(1000).subscribe(x => {
  if(x === 0) console.timeEnd('test');
  console.log(x);
});
