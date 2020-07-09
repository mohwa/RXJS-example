import { Observable } from 'rxjs';

// example 1
// 생성된 옵져버로 구독중인 프로그램 중간에 같은 객체로 또 다른 구독을 등록할 시
// 기존의 구독된 것과는 상관없이 (덮어쓰기가 아닌 추가)가 되어 실행됨
// create의 params로 오는 observer에는 구독때 등록하는 함수 next, error, complete 함수가 있으며,
// subscribe에서 구현하는 동일 이름의 함수는 observer의 함수명에 대한 callback 함수로 생각하면 된다.

const observableCreated$ = Observable.create(observer => {
  console.log('observer create start', observer);
  for (let i = 1; i<=10; i++){
    setTimeout(() => {
      observer.next(i);
      if (i === 10){
        observer.complete();
      }
    }, 300 * i);
  }
});

console.log('created observer', observableCreated$);

observableCreated$.subscribe(
  function next(item){
    console.log(`observerA: ${item}`);
  },
  function error(err){
    console.log(`observerA: ${err}`);
  },
  function complete(){
    console.log(`observerA: complete`);
  }
);

setTimeout(() => {
  observableCreated$.subscribe(
    function next(item){
      console.log(`observerB: ${item}`);
    },
    function error(err){
      console.log(`observerB: ${err}`);
    },
    function complete(){
      console.log(`observerB: complete`);
    }
  );
}, 1350);