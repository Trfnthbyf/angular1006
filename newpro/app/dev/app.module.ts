import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import { MenuComponent }   from './menu.component';
import { HomeComponent } from './home.component';
import { SignInComponent } from './sign-in.component';
import { LoginComponent } from './login.component';
import { ProjectComponent } from './project.component';
import { routes } from './routes/app.routes';
import { UserService } from './services/user.service';
import { LoggedInGuard } from './logged-in.guard';


@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        MenuComponent,
        AppComponent,
        HomeComponent,
        LoginComponent,
        SignInComponent,
        ProjectComponent
    ],
    bootstrap:    [ AppComponent ],
    providers: [
        UserService,
        LoggedInGuard]
})
export class AppModule { }

