import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
// import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  genders = ['Male', 'Female'];
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.loginForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      gender: [''],
      contact: [''],
      email: [''],
      password: [''],
      confirmPassword: ['']
    });
  }

  login() {
    const { value, valid } = this.loginForm
    if (valid) {
      console.log(value);
      // this.empService.loginService(value).subscribe((res) => {
      //   console.log(res);
      // })
    }
  }
}
