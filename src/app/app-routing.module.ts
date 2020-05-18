import { UpdateUserComponent } from './update-user/update-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { Page404Component } from './page404/page404.component';
import { TestComponent } from './test/test.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'people-list',
    component: PeopleListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'add-user',
    component: AddUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update-user/:id',
    component: UpdateUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
