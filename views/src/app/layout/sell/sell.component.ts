import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellService } from './services/sell.service';


@Component({
    selector: 'app-sell',
    templateUrl: './sell.component.html',
    styleUrls: ['./sell.component.scss'],
    animations: [routerTransition()]
})
export class SellComponent implements OnInit {

    sellForm: FormGroup;

    constructor(private _SellService: SellService, fb: FormBuilder) {

        this.sellForm = fb.group({

            seller: [Validators.compose.apply([Validators.required])],
            buyer: [Validators.compose.apply([Validators.required])],
            electricity: [Validators.compose.apply([Validators.required])],
            balance: [Validators.compose.apply([Validators.required])]
        });
    }

    ngOnInit() {

    }

    sell(obj) {

        let user = localStorage.getItem('user');
        let json =
            {
                "jsonrpc": "2.0",
                "method": "invoke",
                "params": {
                    "type": 1,
                    "chaincodeID": {
                        "name": "EGATDemo"
                    },
                    "CtorMsg": {
                        "args": ["sell", user, obj.buyer, obj.electricity, obj.balance]
                    }
                },
                "id": 100
            };

        this._SellService.sell(json).subscribe((res) => {
            console.log(res);
            this.sellForm.reset();
            alert('complete');
            location.reload();
        }, (err) => {
            console.log("error");
            alert('error');
        });
    }

}
