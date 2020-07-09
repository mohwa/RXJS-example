import { Observable } from 'rxjs';

// example 2
// 구독 해제시 그 다음에 호출되는 next는 실행되지 않는다.
// removeEventListener와 동일한 효과

Observable.create(observer => {
  console.log('begin observable');
  observer.next(1);
  observer.next(2);
  observer.complete();
  observer.next(3);
  console.log('end observable');
}).subscribe(
  function next(item){ console.log(item); },
  function error(e){ console.log(e); },
  function complete(){ console.log('complete'); }
);