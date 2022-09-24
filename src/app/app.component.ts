import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: '/app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Please Enter Details');
  }
  constructor(private route:Router){}
  msg:String ="";
  m:String="visible";
 
  loginPage:String="";
  title = 'EventManagement';
  buttonTitle:string = "submit";
  visible:boolean = false;
  submit(form:any){
    var firstName = form.Email;
   
    this.buttonTitle = this.visible?"submit":"submit";
    if(form.Email=="Admin" && form.Password==123456789)
    {
      this.visible = this.visible?false:true;
      this.msg="Login Successfull";
      this.route.navigate(['/check']);
      
       

    }
    else
    {
      this.visible=false;
      this.msg="Invalid Credentials";
    }
  
   this.m="hidden";
   this.loginPage="Back to Login Page";

  
  }
}
 