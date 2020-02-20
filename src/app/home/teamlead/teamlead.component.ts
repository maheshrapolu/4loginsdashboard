import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teamlead',
  templateUrl: './teamlead.component.html',
  styleUrls: ['./teamlead.component.css']
})
export class TeamleadComponent implements OnInit {

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
      this.routes.navigate(['/teamdashboard']);

    }else {
      this.routes.navigate(['/home']);
    }
    
  }
  }