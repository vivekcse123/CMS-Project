import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerListsComponent } from './customer-lists/customer-lists.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { BookingsComponent } from './bookings/bookings.component';
import { TodosComponent } from './todos/todos.component';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from '../app-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { HomeComponent } from './home/home.component';
import { TabViewModule } from 'primeng/tabview';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
@NgModule({
  declarations: [
    DashboardComponent,
    CustomerListsComponent,
    CreateCustomerComponent,
    ManageCustomersComponent,
    BookingsComponent,
    TodosComponent,
    EditCustomerComponent,
    HomeComponent,
    ViewCustomerComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    InputGroupModule,
    InputGroupAddonModule,
    TabViewModule
  ],
  providers: [DashboardComponent],
  exports: [DashboardComponent]
})
export class CustomersModule { }
