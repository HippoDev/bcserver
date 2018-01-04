import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from './../../../../environments/environment';

@Injectable()
export class SellService {

  constructor(private http: Http) { }

  sell(obj) {
    let headers = new Headers({ });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(obj);
    return this.http.post(environment.hostChain, body, options).map(res => res.json());
  }
}
