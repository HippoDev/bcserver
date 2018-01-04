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

  testChaincode() {
    let headers = new Headers({  });
    let options = new RequestOptions({ headers: headers });
    let json = {
      "jsonrpc": "2.0",
      "method": "query",
      "params": {
        "type": 1,
        "chaincodeID": {
          "name": "EGATDemo"
        },
        "ctorMsg": {
          "args": ["query", "a"]
        }
      },
      "id": 100
    }
    return this.http.post('http://192.168.1.107:8080/chaincode', json,options).map(res => res.json());
  }
}
