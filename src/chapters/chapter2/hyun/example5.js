import { Subject } from 'rxjs';

// example 5
// subject.next로 해당 값을 구독중인 곳으로 데이터를 전달하면
// 구독된 모든 함수에서 전달된 값을 가지고 간다. (멀티캐스팅 마법의 멀티캐스팅 생각하면 편할듯)
// subject에서도 마찬가지로 구독해제가 되면, 멀티캐스팅이 전부 중단된다.

const subject = new Subject();

subject.subscribe({
  next: v => console.log(`observerA: ${v}`),
  complete: () => console.log('completeA')
});

subject.subscribe({
  next: v => console.log(`observerB: ${v}`),
  complete: () => console.log('completeB')
});

subject.next(1);
subject.next(2);
subject.complete();
subject.next(3);