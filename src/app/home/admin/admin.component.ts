import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted= false;
  password: string;
  username: string;
  submitted: boolean;
  constructor(private routes: Router,
    private formBuilder: FormBuilder,) { }
  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f() { return this.loginForm.controls; }
  login() : void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.username = this.loginForm.controls['username'].value;
    this.password = this.loginForm.controls['password'].value;
    if(this.username === 'test' && this.password === 'test'){
      this.routes.navigate(['/dashboard']);

    }else {
      this.routes.navigate(['/home']);
    }
    
  }
  }

