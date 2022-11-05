import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // properties
  aim="Your Perfect Banking Partner"
  accounts="Enter Your ACNO Here"

  acno=""
  psw=""

  // user defined functions //4th execute
  acnochange(event:any){
   this.acno=event.target.value
   console.log(this.acno);
   
    
    
  }
  pswchange(event:any){
  this.psw=event.target.value
  console.log(this.psw);
  
   
    
  }
 

  login(){
  //  alert( 'login clicked');
  var acno=this.acno
  var psw=this.psw
  var userDetails=this.userDetails

  if(acno in userDetails){
    if(psw==userDetails[acno].password){
    alert("login successful")

  }
  else{
    alert("invalid password")
  }}
  else{
    alert("invalid userdetails")
  }
  }

  userDetails:any={
    1000:{acno:1000,username:'jees',password:1000,balance:1000},
    1001:{acno:1001,username:'anas',password:1001,balance:10005},
    1002:{acno:1002,username:'minhas',password:1002,balance:10000}
  }

  register(){
    alert('register clicked')
  }






  constructor() { } //1st execute,spl member function, automatically involvs when an object created

  ngOnInit(): void {//2nd execute-life cycle hooks of angular -  initial process of component initialization
  }

}
