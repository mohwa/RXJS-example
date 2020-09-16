
// 출처 https://sustainable-dev.tistory.com/94

// import all from './all';
import call from './call';
import delay from './delay';
// import put from './put';
// import select from './select';
import takeEvery from './takeEvery';
import put from './put';
import take from './take';
import store from './store';
import takeLatest from './takeLatest';

function* testDelay(){

  console.log('before delay');

  yield delay(1000);

  console.log('after delay');
}

function* testPut(){
  
  console.log('take before');
  const data = yield take('take_1');
  put({ type: 'take' });
  console.log('take 2', data);
  put({ type: 'take' });
  console.log('take 3');
  put({ type: 'take' });
  console.log('take 4');
}

function* testTakeEvery(){
  yield takeEvery('take_2', function* test(action){
    console.log('tekeEvery exec func', action);
  });
}

function* testTakeLatest(){
  yield takeLatest('take_3', function* test(action){
    yield delay(1000);
    console.log('takeLatest exec func', action);
  });
}

function all(arr){

  try {
    for (const item of arr){
      const temp = call(item);
      console.log('temp', temp);
    }
  }
  catch(e){
    console.log('e', e);
  }
  

  // return new Promise((resolve, reject) => {

  //   const testloop = async () => {

  //     try {
  //       const response = await Promise.all(arr);
  //       console.log('inner response', response);
  //       resolve(response);
  //     }
  //     catch(err){
  //       console.log('inner err', err);
  //       reject(err);
  //     }
  //   };
    
  //   testloop();
  // });

  // return new Promise(function(resolve, reject) {
  //   function step(key, arg) {
  //     try {
  //       var info = gen[key](arg);
  //       var value = info.value;
  //     } catch (error) {
  //       reject(error);
  //       return;
  //     }
  //     if (info.done) {
  //       resolve(value);
  //     } else {
  //       return Promise.resolve(value).then(
  //         function(value) {
  //           step("next", value);
  //         },
  //         function(err) {
  //           step("throw", err);
  //         }
  //       );
  //     }
  //   }
  //   return step("next");
  // });


  // const test = async () => {
  //   try {
  //     return await Promise.all(arr);
  //   }
  //   catch(e){
  //     throw e;
  //   }  
  // }

  // return test();
}

async function test(){

  try {

    const allValue = await all([
      new Promise(res => setTimeout(() => { console.log('1'); res(1); }, 1000)),
      new Promise(res => setTimeout(() => { console.log('2'); res(2); }, 3000)),
      new Promise((res, reject) => setTimeout(() => { console.log('3'); reject(3); }, 2000)),
    ]);

    console.log('all exec data', allValue);
  }
  catch (err){
    console.log('all error data', err);
  }
}

function* testAll(){

  // test();

  try {
    
    const allValue = yield all([
      new Promise(res => setTimeout(() => { console.log('1'); res(1); }, 1000)),
      new Promise(res => setTimeout(() => { console.log('2'); res(2); }, 1000)),
      new Promise((res, reject) => setTimeout(() => { console.log('3'); reject(3); }, 1000)),
    ]);
  
    console.log('all exec data', allValue);
  }
  catch (err){
    console.log('all error data', err);
  }
}

call(testPut);
call(testTakeEvery);
call(testTakeLatest);

// setTimeout(() => store.dispatch({ type: 'take_1' }), 2000);
// setTimeout(() => store.dispatch({ type: 'take_2' }), 2000);

// setTimeout(() => store.dispatch({ type: 'take_1' }), 6000);
// setTimeout(() => store.dispatch({ type: 'take_2' }), 6000);

// store.dispatch({ type: 'take_3' });
// store.dispatch({ type: 'take_3' });
// store.dispatch({ type: 'take_3' });
// store.dispatch({ type: 'take_3' });

// const a = Promise.all([
//   new Promise(res => setTimeout(() => res(1), 1000)),
//   new Promise(res => setTimeout(() => res(2), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]);

// function* test(){
  
//   const res = yield a.then();
//   console.log('res', res);
// }
// a.catch(err => console.log('err', err));

call(testAll);