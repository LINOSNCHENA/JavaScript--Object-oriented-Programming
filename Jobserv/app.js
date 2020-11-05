import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const monze$ = Observable.create((subject) => {
    console.log('Second X-Observable');
    const interval = setInterval(() => {
        subject.next('XPrimary');
    }, 1000);
    setTimeout(() => clearInterval(interval), 17 * 1000);
 });
 const primaryX = monze$.subscribe(console.log);
  
 setTimeout(() => primaryX.unsubscribe(), 10 * 1000);

 //////////////////////////////////////////////////////////////

 const pemba$ = Observable.create((subject) => {
    console.log('First X-Observable');
    const interval = setInterval(() => {
        subject.next('XBasic');
    }, 1000);
    setTimeout(() => clearInterval(interval), 7 * 1000);
 });
 const secondary1 = pemba$.pipe(
    map((val, index) => index % 2 === 0 ? val : 'xSecondary')
 ).subscribe(val => console.log(val));
  
 setTimeout(() => secondary1.unsubscribe(), 10 * 1000);