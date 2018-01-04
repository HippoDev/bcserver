import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    @ViewChild('username')  public username: ElementRef;
    constructor(fb: FormBuilder, public router: Router) {
        this.form = fb.group({
            username: [null, Validators.compose([Validators.required])]
          });
    }

    ngOnInit() {}

    onLoggedin(val) {
        this.router.navigate(['/history']);
        localStorage.setItem('user', val.username);
        localStorage.setItem('isLoggedin', 'true');
    }
}
