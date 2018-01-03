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

    }

    getHistory(name,from,to){
        let obj = {
            name : name,
            from : from,
            to : to
        }
        this._HistoryService.getHistory(obj).subscribe(res=>{
            this.historys = res.Txn;
            console.log(res.Txn);
        });
    }
}
