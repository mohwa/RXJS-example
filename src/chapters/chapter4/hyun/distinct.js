import { of, interval } from 'rxjs';
import { take, distinct, map } from 'rxjs/operators';

// 모든 중복값을 건너뛴다.
// of(1, 6, 7, 7, 2, 5, 5, 2, 6).pipe(
//   distinct()
// )
// .subscribe(
//   x => console.log(x),
//   err => console.log(err),
//   () => console.log('complete')
// );

// 객체상태일 때는 중복값 제거가 안된다.
// of(
//   { id: 1, value: 20 },
//   { id: 2, value: 40 },
//   { id: 3, value: 70 },
//   { id: 1, value: 20 },
//   { id: 2, value: 40 },
//   { id: 3, value: 70 }
// )
// .pipe(
//   distinct(),
//   map(x => x.value)
// )
// .subscribe(
//   x => console.log(x),
//   err => console.log(err),
//   () => console.log('complete')
// );

// 중복값 제거를 위해선 distinct의 비교 키값을 넣어주면 중복제거가 된다.
// of(
//   { id: 1, value: 20 },
//   { id: 2, value: 40 },
//   { id: 3, value: 70 },
//   { id: 1, value: 20 },
//   { id: 2, value: 40 },
//   { id: 3, value: 70 }
// )
// .pipe(
//   distinct(obj => obj.id),
//   map(x => x.value)
// )
// .subscribe(
//   x => console.log(x),
//   err => console.log(err),
//   () => console.log('complete')
// );

interval(200).pipe(
  take(25),
  map(x => ({ original: x, value: x % 5 })),
  distinct(x => x.value, interval(2100))
)
.subscribe(
  x => console.log(x),
  err => console.log(err),
  () => console.log('complete')
);