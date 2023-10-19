import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Result, User } from '../model/e-commerce';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storageService: StorageService) {}
  isUserValid(user: User): Result {
    let users: User[] = this.storageService.getUsers();
    console.log(user);
    let isvalidUser: boolean = false;
    let validUser: number = users.findIndex((u) => {
      return user.email === u.email && user.password === u.password;
    });
    // console.log(validUser);
    let User: User = users.find((u) => 
      user.email === u.email && user.password === u.password
    )!;
    // console.log(User);
    if (validUser!==-1) isvalidUser = true;
    else isvalidUser = false;
    let result:Result={user:User,result:isvalidUser};
    // console.log(result);
    return result;
  }

  isLoggedInUser():boolean{
    return this.storageService.isUserLoggedIn()
  }

}
