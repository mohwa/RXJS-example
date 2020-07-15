import { of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

// 연속으로 중복된 값이 나올때만 건너뛴다.
// of(1, 6, 7, 7, 2, 5, 5, 2, 6).pipe(
//   distinctUntilChanged()
// )
// .subscribe(
//   x => console.log(x),
//   err => console.log(err),
//   () => console.log('complete')
// );

// compare 함수 사용
// of(
//   { a: 1, b: 20 },
//   { a: 1, b: 20 },
//   { a: 2, b: 40 },
//   { a: 3, b: 70 },
//   { a: 3, b: 70 },
//   { a: 2, b: 40 },
// ).pipe(
//   distinctUntilChanged((o1, o2) => o1.a === o2.a && o1.b === o2.b)
// )
// .subscribe(
//   x => console.log(x),
//   err => console.log(err),
//   () => console.log('complete')
// );

// keySelector 사용
// of(
//   { a: 1, b: 20 },
//   { a: 1, b: 20 },
//   { a: 2, b: 40 },
//   { a: 3, b: 70 },
//   { a: 3, b: 70 },
//   { a: 2, b: 40 },
// ).pipe(
//   distinctUntilChanged(null, x => x.a)
// )
// .subscribe(
//   x => console.log(x),
//   err => console.log(err),
//   () => console.log('complete')
// );

// compare, keySelector 둘다 사용
of(
  { objKey: { a: 1, b: 20 } },
  { objKey: { a: 1, b: 20 } },
  { objKey: { a: 2, b: 40 } },
  { objKey: { a: 3, b: 70 } },
  { objKey: { a: 3, b: 70 } },
  { objKey: { a: 2, b: 40 } },
)
.pipe(
  distinctUntilChanged(
    (o1, o2) => o1.a === o2.a && o1.b === o2.b,
    x => x.objKey
  )
)
.subscribe(
  x => console.log(JSON.stringify(x)),
  err => console.log(err),
  () => console.log('complete')
);