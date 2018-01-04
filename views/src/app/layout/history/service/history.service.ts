import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from './../../../../environments/environment';

@Injectable()
export class HistoryService {

  constructor(private http:Http) { }
  
  getHistory(obj) {
    let headers = new Headers({  });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(environment.hostTxn+'/TxnHistoryRest/txnHistory?id='+obj.name+'&start='+obj.from+'&end='+obj.to, options).map(res => res.json());
  }
}
