import { Component } from '@angular/core';
import { Cart, Home, Orders } from 'src/app/model/e-commerce';
import { StorageService } from 'src/app/service/storage.service';
import { CartService } from 'src/app/service/cart.service';
import { OrdersService } from 'src/app/service/orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  // cartComponent:Home[]=[]
  ordersComponent:Orders[]=[];
  cartTotal:number=this.getTotal();
  cartComponent:Home[]=this.getCart();
  
  

  constructor(private cartService:CartService, private storageService:StorageService,private orderService:OrdersService){
  }
getCart():Home[]{
  // console.log(this.storageService.getCartFromStorage());
  // console.log(this.cartService.getCart());

 return this.cartService.getCart();
}


getTotal():number{
  return this.cartService.getCartTotal();
}
  checkOut = () => {
  // this.ordersComponent=this.ecommerceService.checkOut();
  // this.cartComponent=[];
  // console.log(this.cartComponent);
  this.orderService.checkOut(this.cartComponent);
  }


  }

