import { Component } from '@angular/core';
import { Home } from 'src/app/model/e-commerce';
import { CartService } from 'src/app/service/cart.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  cartComponent:Home[]=[]
  constructor(private storageService:StorageService,private cartService:CartService){
  }

  cartLength():number{
    return this.storageService.getCartCount();
  }

  logOut():void{
this.storageService.removeLoggedInUser();

  }

}
