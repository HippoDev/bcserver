import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyRoutingModule } from './buy-routing.module';
import { BuyComponent } from './buy.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BuyServiceService } from './service/buy-service.service';

@NgModule({
    imports: [CommonModule, BuyRoutingModule, PageHeaderModule, FormsModule, ReactiveFormsModule],
    declarations: [BuyComponent],
    providers: [BuyServiceService]
})
export class BuyModule {}
