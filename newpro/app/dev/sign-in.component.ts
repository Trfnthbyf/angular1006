import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './services/user.service';
import { User } from './user';

@Component({
    selector: 'signin',
    template: `  <div class="form-container">
      <h3 class="form-title">Sign In</h3>
        <form *ngIf="active" novalidate #signupForm="ngForm" (ngSubmit)="signupForm.valid && sendEmail(email.value)">
          <div>                        
              <input type="text" name="email" placeholder="Enter your email"
                                #email="ngModel"
                                pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
                                [ngModel]="user.email"
                                required/>   
              <div [hidden]="email.valid || (email.pristine && !signupForm.submitted)">Email is required</div>                         
            </div>                        
            <button type="submit" class="form-button">Sign In</button>
          </form>
        </div>
               `
})
export class SignInComponent {
    user = new User('');
    active = true;
    justEmail;
    
    constructor(private userService: UserService, private router: Router) {}

    sendEmail(email, password) {
        
        this.user = new User(email, password);
        this.userService.confirmEmail(email).subscribe((result) => {
           
            if (result) {
                this.justEmail = result;
            }
        });

          this.user = new User('', '');
          this.active = false;
          setTimeout(()=> this.active = true, 0);
    }
}
