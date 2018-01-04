import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BuyServiceService {

  constructor(private _http:Http) { }

  buyTrade(obj){
    let headers = new Headers({  });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(obj);
    return this._http.post(environment.hostChain + '/chaincode', body, options).map(res => res.json());
  }
}
