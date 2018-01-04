import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SidebarService } from './sidebar.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    isActive: boolean = false;
    showMenu: string = '';

    username: string;   
    balance: string;
    electricity: string;

    

    constructor(private sidebarService: SidebarService){
        this.username = localStorage.getItem('user');
    }
    
    ngOnInit() {
        this.sidebarService.getInform(localStorage.getItem('user')).subscribe(inform => {
            let res = JSON.parse(inform.result.message);
            this.balance = res.Amount;
            this.electricity = res.Electricity;
        });
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
