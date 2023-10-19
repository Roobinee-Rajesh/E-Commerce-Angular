import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login, Result } from 'src/app/model/e-commerce';
import { AuthService } from 'src/app/service/auth.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error:string="";
  
  constructor(private authService:AuthService,private router:Router,private storageService:StorageService){}

  onSubmit(loginForm:NgForm):void{
    let result:Result=this.authService.isUserValid(loginForm.value)
   if(result.result){
    this.storageService.setLoggedInUser(result.user);
    this.router.navigate(['home'],{replaceUrl:true});
   }
   else{
    this.error="Invalid Credentials";
   }
  }

}
