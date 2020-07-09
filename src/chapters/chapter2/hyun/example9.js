import { Observable } from 'rxjs';

// example 9

const observableCreated$ = Observable.create(observer => {
  try {
    observer.next(1);
    observer.next(2);
    throw("throw err test");
  }
  catch(e) {
    observer.error(e);
  }
  finally {
    observer.complete();
  }
});

observableCreated$.subscribe(
  function next(item){ console.log(item); },
  function error(err){ console.log(`error: ${err}`); },
  function complete(){ console.log('complete') }
);