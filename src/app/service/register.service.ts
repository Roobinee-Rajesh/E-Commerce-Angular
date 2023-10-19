import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Register, User } from '../model/e-commerce';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private storageService:StorageService) { }
  getRandomNumber = (max = 1000): number => {
    return Math.floor(Math.random() * max);
  };

  addUser(register:Register){
    let users:User[]=this.storageService.getUsers();
    let findUser:User=users.find((r)=>r.email===register.email)!;
    let status=false;
    if(!findUser)
    {
    users.push({id:this.getRandomNumber(),email:register.email,password:register.password});
    // console.log(users);
    this.storageService.setUser(users);
    status=true;
    }
    return status;
  }
}
