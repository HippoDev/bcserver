import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, HistoryRoutingModule, PageHeaderModule],
    declarations: [HistoryComponent]
})
export class HistoryModule {}
