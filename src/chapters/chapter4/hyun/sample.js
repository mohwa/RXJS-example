import { interval, timer } from 'rxjs';
import { sample, take } from 'rxjs/operators';

const sampleSize = 3;
const sourceInterval = 200;
const sampleDelay = 100;

interval(sourceInterval).pipe(
  sample(timer(
    sourceInterval + sampleDelay,
    sourceInterval * sampleSize
  )),
  take(4)
)
.subscribe(
  x => console.log(x),
  err => console.log(err),
  () => console.log('complete')
);