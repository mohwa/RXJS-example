import { timer } from 'rxjs';
import { sampleTime, take } from 'rxjs/operators';

const sourcePoint = 300;
const sourceDelay = 400;
const sampleCount = 2;
const samplePeriod = sourceDelay * sampleCount;

timer(sourcePoint, sourceDelay).pipe(
  sampleTime(samplePeriod),
  take(3)
)
.subscribe(
  x => console.log(x),
  err => console.log(err),
  () => console.log('complete')
);