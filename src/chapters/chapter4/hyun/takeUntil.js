import { interval, fromEvent } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

const stopBtn = document.createElement('button');
const display = document.createElement('div');

stopBtn.id = 'stopBtn';
stopBtn.innerText = 'stop';

display.id = 'display';
display.innerText = '0sec';

document.body.appendChild(stopBtn);
document.body.appendChild(display);

// event가 동작했을때 해당 옵저러블을 구독해제 및 complete를 실행한다.
interval(1000).pipe(
  take(1000),
  takeUntil(fromEvent(document.querySelector('#stopBtn'), 'click'))
)
.subscribe(
  x => document.querySelector('#display').innerText = `${x}sec`,
  err => console.log(err),
  () => console.log('complete')
)