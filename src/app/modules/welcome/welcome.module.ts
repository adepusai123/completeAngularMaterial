import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { MaterialModule } from 'src/app/material/material.module';
import { LoginComponent } from '../login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    WelcomeComponent,
    LoginComponent
  ],
  // providers: [EmployeeService]
  // exports: [WelcomeComponent, LoginComponent]
})
export class WelcomeModule { }
