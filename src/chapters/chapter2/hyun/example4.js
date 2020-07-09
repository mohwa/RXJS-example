import { interval } from 'rxjs';

// example 4
// obserable1에 obserable2를 추가함으로서 2는 1에 종속적인 구독이 되었다.
// 최상위 1을 구독해제함으로서 2번도 같이 구독해제 된다.

const observable1 = interval(400);
const observable2 = interval(300);

const subscription = observable1.subscribe(x => {
  console.log(`first: ${x}`);
});

const childSubscription = observable2.subscribe(x => {
  console.log(`second: ${x}`);
});

subscription.add(childSubscription);

setTimeout(() => {
  subscription.unsubscribe();
}, 1000);
