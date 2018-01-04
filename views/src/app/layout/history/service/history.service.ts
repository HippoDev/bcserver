import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HistoryService {

  constructor(private http:Http) { }
  
  getHistory(obj) {
    let headers = new Headers({  });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://192.168.1.107:8080/TxnHistoryRest/txnHistory?id='+obj.name+'&start='+obj.from+'&end='+obj.to, options).map(res => res.json());
  }
}
