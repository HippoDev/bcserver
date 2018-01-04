import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuyServiceService } from './service/buy-service.service';

@Component({
    selector: 'app-buy',
    templateUrl: './buy.component.html',
    styleUrls: ['./buy.component.scss'],
    animations: [routerTransition()]
})
export class BuyComponent implements OnInit {
    buyForm: FormGroup;

    constructor(fb: FormBuilder, private _buyService: BuyServiceService) {
        this.buyForm = fb.group({
            secondaryUser: [null, Validators.compose([Validators.required])],
            electricity: [null, Validators.compose([Validators.required])],
            amount: [null, Validators.compose([Validators.required])]
          });
    }
    

    ngOnInit() {}

    onSubmit(value) {
        let userName = localStorage.getItem('user');

        let buyJsonInput = 
        {
            "jsonrpc": "2.0",
            "method": "invoke",
            "params": {
              "type": 1,
              "chaincodeID":{
                  "name": "EGATDemo"
              },
              "CtorMsg": {
                  "args": ["buy", userName, value.secondaryUser, value.electricity, value.amount]
              }
            },
            "id": 100
        };

        this._buyService.buyTrade(buyJsonInput).subscribe((res) => {
            console.log("success");
            this.buyForm.reset();
        }, (err) => {
            console.log("error");
        });

        

    }
}
