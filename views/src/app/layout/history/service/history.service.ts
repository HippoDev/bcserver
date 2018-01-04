import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HistoryService {

  constructor(private http:Http) { }
  
  getHistory(obj) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://bcserver:7004/EGAT/TxnHistoryRest/txnHistory?id='+obj.name+'&start='+obj.from+'&end='+obj.to, options).map(res => res.json());
  }
}
