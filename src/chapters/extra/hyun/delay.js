
import { timer } from 'rxjs';

export default function delay(ms){
  return new Promise(resolve => timer(ms).subscribe(resolve));
};