import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UserModule } from './user/user.module';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import ('./pages/pages.module').then((m: { PagesModule: PagesModule }) => m.PagesModule)
  },
  {
    path: 'user',
    loadChildren: () => import ('./user/user.module').then((m: { UserModule: UserModule }) => m.UserModule)
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
