import { interval } from 'rxjs';

// example 3
// 해당 소스는 interval때문에 1초 뒤부터 비동기로 실행되는데, 생성되자마자 unsubscribe가 실행되어
// 이벤트가 구독해제되어 실행되지 않는다.

const observable = interval(1000);
const subscription = observable.subscribe(x => {
  console.log(`1: ${x}`);
});
const subscription2 = observable.subscribe(x => {
  console.log(`2: ${x}`);
});

subscription.unsubscribe();