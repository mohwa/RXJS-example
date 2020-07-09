import { fromEvent } from 'rxjs';

// example 4
// 엘리먼트의 이벤트를 구독할 때는 다른 함수, 연산자, 함수로 이벤트 실행 종료를 명시하지 않으면 complete로 가지 않는다.
// fromEvent 함수의 이벤트 실행을 종료한 이후 시점은 다른 함수나 연산자로 대체한다.

const btn1 = document.createElement('button');
const nextResult = document.createElement('div');
const errorResult = document.createElement('div');
const completeResult = document.createElement('div');

btn1.id = 'btn1';
btn1.innerText = '버튼';

nextResult.id = 'nextResult';
errorResult.id = 'errorResult';
completeResult.id = 'completeResult';

document.body.appendChild(btn1);
document.body.appendChild(nextResult);
document.body.appendChild(errorResult);
document.body.appendChild(completeResult);

fromEvent(document.querySelector('#btn1'), 'click').subscribe(
  event => {
    console.log(event);
    const pTag = document.createElement('p');

    pTag.appendChild(document.createTextNode(`event.target.id ${event.target.id} clicked`));
    document.querySelector('#nextResult').appendChild(pTag);
  },
  err => {
    const pTag = document.createElement('p');

    pTag.appendChild(document.createTextNode(`error: ${err.message}`));
    document.querySelector('#errorResult').appendChild(pTag);
  },
  () => {
    const pTag = document.createElement('p');

    pTag.appendChild(document.createTextNode(`completed`));
    document.querySelector('#completeResult').appendChild(pTag);
  });
