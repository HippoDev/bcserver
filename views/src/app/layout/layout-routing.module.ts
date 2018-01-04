import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

import {AuthGuard} from './../shared';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'history', canActivate: [AuthGuard] },
            { path: 'sell', loadChildren: './sell/sell.module#SellModule' , canActivate: [AuthGuard] },
            { path: 'history', loadChildren: './history/history.module#HistoryModule' , canActivate: [AuthGuard] },
            { path: 'buy', loadChildren: './buy/buy.module#BuyModule' , canActivate: [AuthGuard] }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
