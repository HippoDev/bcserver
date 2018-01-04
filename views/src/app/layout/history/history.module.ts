import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { PageHeaderModule } from './../../shared';

import { HistoryService } from './service/history.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule,
        HistoryRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [HistoryComponent],
    providers: [HistoryService]
})
export class HistoryModule { }
