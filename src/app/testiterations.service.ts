import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs/Rx';
import { Http, URLSearchParams } from '@angular/http';

export interface IBifurcation {
  r: number;
  x: number;
}

@Injectable()
export class TestiterationsService {

  constructor(public http: Http) { }
  public generate(width: number): Observable<IBifurcation> {
    const rIterator = Observable.range(0, width - 1).delay(1).map(x => (4.0 * x) / width),
      sync = new Subject<IBifurcation>();
    rIterator.subscribe(r => {
      const params = new URLSearchParams();
      params.set('r', r.toString());
      this.http.get('https://wehrlifunctionsvc.azurewebsites.net/api/HttpTriggerJS1', {
        search: params
      }).subscribe(res => {
        const result = res.json();
        if (result && result.length) {
          result.forEach(x => sync.next({ r, x }));
        }
      });
    });
    return sync.asObservable();
  }

}
