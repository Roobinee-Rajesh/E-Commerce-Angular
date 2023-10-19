import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Register} from 'src/app/model/e-commerce';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  error="";
  constructor(private registerService:RegisterService, private router:Router){}
  register(registerForm:NgForm){
    let formValue:Register=registerForm.value;
    // console.log(formValue);
    let status=this.registerService.addUser(formValue)
    if(status)
    this.router.navigate(['/login'],{replaceUrl:true});
  else
  this.error="User Already Exist"
  }

}
