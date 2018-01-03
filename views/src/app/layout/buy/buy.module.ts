import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyRoutingModule } from './buy-routing.module';
import { BuyComponent } from './buy.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, BuyRoutingModule, PageHeaderModule],
    declarations: [BuyComponent]
})
export class BuyModule {}
