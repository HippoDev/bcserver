import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellRoutingModule } from './sell-routing.module';
import { SellComponent } from './sell.component';
import { PageHeaderModule } from './../../shared';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellService} from './services/sell.service';
import { HttpModule } from '@angular/http';


@NgModule({
    imports: [CommonModule, SellRoutingModule, PageHeaderModule, FormsModule, ReactiveFormsModule, HttpModule],
    declarations: [SellComponent],
    providers:[SellService]
})
export class SellModule {}
