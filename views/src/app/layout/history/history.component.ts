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
        let currentDate = new Date();
        let current= currentDate.getFullYear()+"-"+('0'+(currentDate.getMonth()+1)).slice(-2)+"-"+('0'+currentDate.getDate()).slice(-2)
        console.log(current)
        this.time = fb.group({
            from: ["2011-01-01"],
            to: [current]
          });
    }

    ngOnInit() {
        this.getHistory(this.time.value);
    }

    getHistory(form){
        form.name = localStorage.getItem('user');
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
