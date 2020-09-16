
export default function call(generator, args){

  if (generator instanceof Promise) return generator;

  const iterator = generator.call(null, args);

  function asyncFlow(result){
    
    const { value, done } = iterator.next(result);

    if (done){
      return value;
    }
    else {
      if (value instanceof Promise){
        return value.then(val => asyncFlow(val));
      }
      else {
        return asyncFlow(value);
      }
    }
  }

  asyncFlow();
};