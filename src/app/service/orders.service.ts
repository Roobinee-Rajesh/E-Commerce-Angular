import { Injectable } from '@angular/core';
import { Home, Orders, User } from '../model/e-commerce';
import { StorageService } from './storage.service';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(
    private storageService: StorageService,
    private cartService: CartService
  ) {}
  orders: Orders[] = this.storageService.getOrdersFromStorage();
  loggedInUser: User = this.storageService.getLoggedInUser();

  // getCart(): Home[] {
  //   let cart:Cart[]=this.storageService.getCartFromStorage();
  //   let userCart:Home[]=cart.find((uc)=>uc.user===this.loggedInUser.id!)?.products!;
  //   // console.log(userCart);
  //   return userCart;
  // }

  // checkOut(cart:Home[])

  checkOut = (cart: Home[]) => {
    this.orders.push({
      userId: this.loggedInUser.id,
      timestamp: Date.now(),
      products: cart as Home[],
      total: this.cartService.getCartTotal(),
    });
    // console.log(this.orders);
    // console.log(cart);
    this.storageService.setOrdersToStorage(this.orders);
    this.storageService.removeUserCart(this.loggedInUser.id!);
  };

  getOrders():Orders []{
    let orders: Orders[] = this.storageService.getOrdersFromStorage();
    if (orders.length > 0) {
      let userOrders: Orders = orders.find(
        (uo) => uo.userId === this.loggedInUser.id
      )!;
      let newOrders:Orders[]=[];
      newOrders.push(userOrders);
      // console.log(userOrders);
      return newOrders;
    } else {
      return [];
    }
  }
}
