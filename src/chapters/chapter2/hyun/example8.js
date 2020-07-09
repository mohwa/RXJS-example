import { Observable } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

// example 8
  
  console.time('array');
  console.log([1,2]
    .map(value => value * 2)
    .map(value => value + 1)
    .map(value => value * 3)
  );
  console.timeEnd('array');

  const observableCreated$ = Observable.create(observer => {
    console.time('observer');
    console.log('Observable BEGIN');
    
    const arr = [1,2];

    for (let i = 0; i<arr.length; i++){
      console.log(`current array: arr[${i}]`);
      observer.next(arr[i]);
    }
    console.log('BEFORE complete');
    observer.complete();
    console.log('observable END');
    console.timeEnd('observer');
  });

  const logAndGet = (original, value) => {
    console.log(`original: ${original}, map value: ${value}`);
    return value;
  };

  observableCreated$.pipe(
    map(value => logAndGet(value, value * 2)),
    map(value => logAndGet(value, value + 1)),
    map(value => logAndGet(value, value * 3)),
    toArray()
  ).subscribe(arr => console.log(arr));