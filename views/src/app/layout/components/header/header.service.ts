import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from './../../../../environments/environment';

@Injectable()
export class HeaderService {

  constructor(private http: Http) { }


  getInform(user) {
    let json = {
      "jsonrpc": "2.0",
      "method": "query",
      "params": {
        "type": 1,
        "chaincodeID": {
          "name": "EGATDemo"
        },
        "ctorMsg": {
          "args": ["query", user]
        }
      },
      "id": 100
    }

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });      
    return this.http.post(environment.hostChain+'/chaincode', json, options).map(res => res.json());
  }

}
