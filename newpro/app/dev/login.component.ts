import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './services/user.service';
import { User } from './user';

@Component({
    selector: 'login',
    template: `<div class="form-container">
                   <h3 class="form-title">Login Page</h3>
                   {{justEmail}}
                   <form *ngIf="active" novalidate #signupForm="ngForm" (ngSubmit)="signupForm.valid && onSubmit(email.value, password.value)" method="POST">
                        <div>                        
                            <input type="text" name="email" placeholder="Enter your email" value={{justEmail}} disabled/>
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="Enter your password"
                                #password="ngModel"
                                [ngModel]="user.password"                               
                                minlength="8"
                                required/>
                                <div [hidden]="password.valid || (password.pristine && !signupForm.submitted)">
                                password is required
                                </div>
                        </div>
                        <button type="submit" class="form-button">Login</button>
                   </form>
               </div>
               `
})
export class LoginComponent {
    @Input()justEmail: string;
    user = new User('', '');
    active = true;
    
    constructor(private userService: UserService, private router: Router) {}

    onSubmit(email, password) {
        
        this.user = new User(email, password);
        this.userService.login(email, password).subscribe((result) => {
   
            if (result) {
                this.router.navigate(['home']);
            }
        });

          this.user = new User('', '');
          this.active = false;
          setTimeout(()=> this.active = true, 0);
    }
}
