import { Component } from '@angular/core';

import { UserService } from './services/user.service';

@Component({
    selector: 'menu',
    template: `<nav class="menu">
                   <ul class="menu-list">
                       <li><a routerLink="/home">Home</a></li>
                       <li><a routerLink="/project">Project</a></li>
                       <li><a routerLink="/registr">registr</a></li>
                       <li><a routerLink="/home" (click)="onClick()">log out</a></li>
                   </ul>                   
               </nav>`
})
export class MenuComponent {
    constructor(private userService: UserService) {}

    onClick() {
        this.userService.logout();
    }
}