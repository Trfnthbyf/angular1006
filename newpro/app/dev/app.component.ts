import { Component } from '@angular/core';

@Component({
    selector: 'auth-app',
    template: `<div class="body-container">
                  <menu></menu>
                   <router-outlet></router-outlet>
               </div>
               `
})
export class AppComponent {

}

