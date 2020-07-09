import { Observable } from 'rxjs';

// 생성 함수
// Observable 객체를 생성하는 가장 기본이 되는 함수
// 모든 생성 함수는 Obserervable 객체를 return 값으로 준다.

// example 1 - 1
const observable1to10$ = Observable.create(observer => {
  console.log('[observable1to10] BEGIN subscribe function');

  for (let value = 1; value <= 10; value++){
    observer.next(value);
  }

  observer.complete();

  // 실행되지 않음
  observer.next(11);
  observer.error(new Error('error'));
  observer.complete();

  // complete가 실행됬어도 밑에 있는 코드는 실행됨
  // observer에서 notify를 보내는 부분만 더이상 실행되지 않고, 코드들은 전부 실행된다
  console.log('[observable1to10] END subscribe function');

  return () => console.log('observable1to10 unsubscribed');
});

observable1to10$.subscribe(
  value => console.log(`next value: ${value}`),
  err => console.error(`error`, err.message),
  () => console.log('complete')
);

// example 1 - 2
// const observable1to10$ = Observable.create(observer => {
//
//   // try-catch문을 벗겨내도 에러 발생시 subscribe에 설정한 에러 함수가 호출됨.
//   try {
//     console.log('[observable1to10] BEGIN subscribe function');
//     for (let value = 1; value <= 10; value ++){
//       observer.next(value);
//       consloe.log(`observer.next(${value})`); // 오타
//     }
//   }
//   catch (e){
//     observer.error(e);
//   }
//
//   console.log('[observable1to10] END subscribe function');
//
//   return () => console.log('observable1to10 unsubscribed');
// });
//
// observable1to10$.subscribe(
//   value => console.log(`next value: ${value}`),
//   err => console.error(`error`, err.message),
//   () => console.log('complete')
// );
