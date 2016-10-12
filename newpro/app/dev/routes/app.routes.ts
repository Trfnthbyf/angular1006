import { HomeComponent } from '../home.component';
import { LoginComponent } from '../login.component';
import { ProjectComponent } from '../project.component';
import { LoggedInGuard } from '../logged-in.guard';
import { SignInComponent } from '../sign-in.component';
import { RegistrComponent } from '../registr.component';

export const routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'registr',
        component: SignInComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'project',
        component: ProjectComponent,
        canActivate: [LoggedInGuard] }
];
