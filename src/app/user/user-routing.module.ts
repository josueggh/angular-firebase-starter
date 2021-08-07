import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { LoginComponent } from './login/login.component';

const redirectToHome = () => redirectLoggedInTo(['']);


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectToHome }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
