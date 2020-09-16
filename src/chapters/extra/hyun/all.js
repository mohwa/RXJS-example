
export default function all(array){
  
  return Promise.all(array)
    .then(res => res)
    .catch(err => {
      console.log('inner all err', err);
      // throw err;
      return new Error(err);
    })

  // return new Promise((resolve, reject) => {

  //   // try {
      
  //   //   Promise.all(array)
  //   //     .then(res => {
  //   //       console.log('inner res', res);
  //   //     })
  //   //     .catch(err => {
  //   //       console.log('inner err', err);
  //   //       throw err;
  //   //     })

  //   // }
  //   // catch(e){
  //   //   console.log('outer', e);
  //   // }

    


  //   // Promise.all(array.catch(itemErr => itemErr.message))
  //   //   .then(res => {
  //   //     console.log('success', res);
  //   //     // resolve(res);
  //   //   })
  //   //   .catch(err => {
  //   //     console.log('error', err);
  //   //     throw err;
  //   //     // throw new Error(err);
  //   //   });
    

  //   // try {
  //   //   // const execPromise = Promise.all(array);
      
  //   //   let isError = false;

  //   //   const execPromise = Promise.all(array.map(item => 
  //   //     item.catch(err => {
  //   //       isError = err;
  //   //       return new Error(err.message);
  //   //     })
  //   //   ));

  //   //   execPromise.then(value => {
  //   //     if (isError){
  //   //       // throw isError;
  //   //       reject();
  //   //     }
  //   //     else {
  //   //       resolve(value);
  //   //     }
  //   //     // console.log('value', value);
  //   //   });
  //   // }
  //   // catch(e){
  //   //   console.log('error all', e);
  //   // }

    
  //   // const successResponse = execPromise.then();
  //   // const errorResponse = execPromise.catch();

  //   // resolve(execPromise);
  //   // reject(errorResponse);

  // });
}