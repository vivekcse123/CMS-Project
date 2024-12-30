import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './customers/dashboard/dashboard.component';
import { CustomerListsComponent } from './customers/customer-lists/customer-lists.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { ManageCustomersComponent } from './customers/manage-customers/manage-customers.component';
import { BookingsComponent } from './customers/bookings/bookings.component';
import { TodosComponent } from './customers/todos/todos.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Header } from 'primeng/api';
import { HeaderComponent } from './header/header.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { HomeComponent } from './customers/home/home.component';
import { ViewCustomerComponent } from './customers/view-customer/view-customer.component';
import { myGuardGuard } from './guards/my-guard.guard';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

const routes: Routes = [
  {path: "", redirectTo: 'signup', pathMatch: 'full'},
  {path: 'signup', title: "SignUp", component: SignupComponent},
  {path: 'login', title: "Login", component: LoginComponent},
  // {path: 'header', component: HeaderComponent},
  {path: 'admin/:id/dashboard', component: DashboardComponent, canActivate: [myGuardGuard],
  children: [
    {path: "home", title: "Dashboard | Home", component: HomeComponent, canActivate: [myGuardGuard]},
    {path: 'lists', title: "Customers Lists", component: CustomerListsComponent, canActivate: [myGuardGuard]},
    {path: 'create', title: "Create Customer", component: CreateCustomerComponent, canActivate: [myGuardGuard]},
    {path: 'manage', title: "Manage Customer", component: ManageCustomersComponent},
    {path: "manage/edit/:id", title: "Edit Customer", component: EditCustomerComponent},
    {path: 'booking', title: "Customer Booking", component: BookingsComponent},
    {path: 'todos', title: "Todos", component: TodosComponent},   
    {path: 'lists/view/:id', title: "View Customer", component: ViewCustomerComponent},
    {path: 'viewadmin', component: AdminProfileComponent, title: "Admin Profile"}
  ]},
  {path: "**", component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
