import { Component, OnInit } from '@angular/core';
import  StudentService  from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data={username:"",password:""};

  constructor(private studentService :StudentService,private router :Router) { }

  ngOnInit() {
  }
  login(){
    this.studentService.login();
  }
}
