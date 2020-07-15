import useState from "@chapters/chapter2/jeon/useState";
import useEffect from "@chapters/chapter2/jeon/useEffect";
import useMemo from "@chapters/chapter2/jeon/useMemo";
import useCallback from "@chapters/chapter2/jeon/useCallback";
import Observable from '@lib/observable';
import Subject from '@lib/subject';

function Component () {
  const [x, setXValue] = useState(4, Component);
  const [y, setYValue] = useState(5, Component);

  const xMemo = useMemo(() => 6, []);
  const yMemo = useMemo(() => x * y, [x, y]);

  const xfn = useCallback(() => console.log('xfn', x, y), []);
  const yfn = useCallback(() => console.log('yfn', x * y), [x, y]);

  console.log('START COMPONENT');

  xfn();
  yfn();

  useEffect(() => {
    console.log('A');
    setXValue(7);
  }, []);

  useEffect(() => {
    console.log('B', x, y, xMemo, yMemo);
  }, [x, y, xMemo, yMemo]);

  useEffect(() => {
    console.log('C');
    // setTimeout(() => {
    setYValue(8);
    // });
  }, []);

  useEffect(() => {
    console.log('D');
  }, []);
}

Component();
//
// // const observable1 = Observable.create((observer) => {
// //   observer.next(1);
// //   observer.complete();
// //   observer.next(2);
// // });
// //
// // observable1.subscribe(
// //   (v) => console.log('observable1', v),
// //   null,
// //   () => console.log('observable1 COMPLETE')
// // );
// //
// // const observable2 = Observable.create((observer) => {
// //   observer.next(3);
// //   observer.next(4);
// //   throw new Error('throw err test');
// //   observer.next(5);
// // });
// //
// // observable2.subscribe(
// //   (v) => console.log('observable2', v),
// //   (v) => console.log('ERROR', v),
// //   () => console.log('observable2 COMPLETE')
// // );
// //
// // const observable3 = Observable.create((observer) => {
// //   observer.next(6);
// //   observer.complete();
// //   observer.next(7);
// // });
// //
// // observable3.subscribe(
// //   (v) => console.log('observable3', v),
// //   null,
// //   () => console.log('observable3 COMPLETE')
// // );
// //
// // const subject = Subject.factory();
// //
// // subject.subscribe({
// //   next: (v) => console.log('subject1', v),
// //   complete: () => console.log('subject1 COMPLETE')
// // });
// //
// // subject.subscribe({
// //   next: (v) => console.log('subject2', v),
// //   complete: () => console.log('subject2 COMPLETE')
// // });
// //
// // subject.next(1);
// // subject.next(2);
// // subject.complete();
// // subject.next(3);
