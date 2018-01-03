import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellRoutingModule } from './sell-routing.module';
import { SellComponent } from './sell.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, SellRoutingModule, PageHeaderModule],
    declarations: [SellComponent]
})
export class SellModule {}
