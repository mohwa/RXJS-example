// // SUB ROUTINE(로직을 한곳에 모아놓고 반복적으로 호출할 수 있게 만든 루틴을 말한다(보통 함수를 말한다))
// function BLOCK() {
//   // SUB FLOW
//   console.log('[BLOCK] SUB FLOW');
// }
//
// // MAIN FLOW
// console.log('[BLOCK] MAIN FLOW');
//
// // SUB ROUTINE 이 종료될 때까지 제어권이 메인 FLOW 로 넘어가지않는다.
// BLOCK();
//
// // MAIN FLOW 로 제어권이 넘어오면 아래 MAIN FLOW 를 실행한다.
// console.log('[BLOCK] NEXT MAIN FLOW');
//
//
// // SUB ROUTINE(로직을 한곳에 모아놓고 반복적으로 호출할 수 있게 만든 루틴을 말한다(보통 함수를 말한다))|
// function NONBLOCK() {
//   // SUB FLOW
//   requestAnimationFrame(() => {
//     console.log('[NONBLOCK] SUB FLOW');
//   })
// }
//
// console.log('[NONBLOCK] MAIN FLOW');
//
// // SUB ROUTINE 종료를 기다리지않고 제어권이 메인 FLOW 로 넘어간다.
// NONBLOCK();
//
// // MAIN FLOW 로 제어권이 넘어오면 아래 MAIN FLOW 를 실행한다.
// console.log('[NONBLOCK] NEXT MAIN FLOW');
//
//
// console.log('[SYNC] MAIN FLOW');
//
// // SUB ROUTINE
// /**
//  * @return {string}
//  */
// function SYNC() {
//   // SUB FLOW
//   return '[SYNC] SUB FLOW';
// }
//
// // SYNC 방식의 흐름은 반드시 왼쪽에서 오른쪽으로 위에서 아래로 흐른다.
// const result = SYNC();
//
// console.log(result);
//
// // MAIN FLOW
// console.log('[SYNC] NEXT MAIN FLOW');
//
//
// // SUB ROUTINE
// function ASYNC(f) {
//   // SUB FLOW
//   f('[ASYNC] SUB FLOW');
// }
//
// // MAIN FLOW
// console.log('[ASYNC] MAIN FLOW');
//
// // ASYNC 방식의 흐름은 위에서 아래가 아닌, 전달받은 함수를통해, 다른 흐름을 가지게된다.(이 이유떄문에 ASYNC 라 부르는것이다)
// // 즉 ASYNC 함수가 종료된 후, 흐름은 MAIN FLOW 가아닌, 전달받은 함수의 SUB FLOW 로 흐르게되었다.
// ASYNC((v) => {
//   console.log(v);
// });
//
// // MAIN FLOW
// console.log('[ASYNC] NEXT MAIN FLOW');
//
//
// function BLOCK_ASYNC(f) {
//   for (let i = 1; i <= 10; i++) {
//     if (i === 10) {
//       f('[BLOCK_ASYNC] SUB FLOW');
//     }
//   }
// }
//
// // MAIN FLOW
// console.log('[BLOCK_ASYNC] MAIN FLOW');
//
// // ASYNC 방식의 흐름은 위에서 아래가 아닌, 전달받은 함수를통해, 다른 흐름을 가지게된다.(이 이유떄문에 ASYNC 라 부르는것이다)
// // 즉 ASYNC 함수가 종료된 후, 흐름은 MAIN FLOW 가아닌, 전달받은 함수의 SUB FLOW 로 흐르게되었다.
// BLOCK_ASYNC((v) => {
//   console.log(v);
// });
//
// console.log('[BLOCK_ASYNC] NEXT MAIN FLOW');
//
// function NONBLOCK_ASYNC(f) {
//   requestAnimationFrame(() => {
//     f('[NONBLOCK_ASYNC] SUB FLOW');
//   });
// }
//
// // MAIN FLOW
// console.log('[NONBLOCK_ASYNC] MAIN FLOW');
//
// // ASYNC 방식의 흐름은 위에서 아래가 아닌, 전달받은 함수를통해, 다른 흐름을 가지게된다.(이 이유떄문에 ASYNC 라 부르는것이다)
// // 즉 ASYNC 함수가 종료된 후, 흐름은 MAIN FLOW 가아닌, 전달받은 함수의 SUB FLOW 로 흐르게되었다.
// NONBLOCK_ASYNC((v) => {
//   console.log(v);
// });
//
// // MAIN FLOW
// console.log('[NONBLOCK_ASYNC] NEXT MAIN FLOW');
