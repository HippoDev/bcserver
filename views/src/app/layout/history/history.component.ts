import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HistoryService } from './service/history.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss'],
    animations: [routerTransition()]
})
export class HistoryComponent implements OnInit {
    historys;
    time;
    constructor(private _HistoryService:HistoryService, fb: FormBuilder) {
        this.time = fb.group({
            from: [],
            to: []
          });
    }

    ngOnInit() {
        //this.getHistory('b','2016-01-01','2018-10-10');
    }

    getHistory(form){
        console.log(form);
        form.name = 'b';
        let obj = {
            name : form.name,
            from : form.from,
            to : form.to
        }
        this._HistoryService.getHistory(obj).subscribe(res=>{
            this.historys = res.Txn;
            console.log(res.Txn);
        });
        
    }
}
