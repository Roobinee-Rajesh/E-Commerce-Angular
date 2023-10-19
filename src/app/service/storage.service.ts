import { Injectable } from '@angular/core';
import { Cart, Home, Orders, User } from '../model/e-commerce';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  users: User[] = [
    { id: 1, email: 'user@gmail.com', password: 'user@123' },
  ];
  products: Home[] = [];
  cart: Cart[] = [];
  orders: Home[] = [];
  loadUsers() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
    if (!localStorage.getItem('products')) {
      localStorage.setItem('products', JSON.stringify(this.products));
    }
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    if (!localStorage.getItem('orders')) {
      localStorage.setItem('orders', JSON.stringify(this.orders));
    }
  }
  //Set and get users
  getUsers(): User[] {
    return this.users;
  }
  setUser(newUsers: User[]): void {
    localStorage.setItem('users', JSON.stringify(newUsers));
  }

  //Set and get loggedin users
  setLoggedInUser(loggedInUser: User) {
    sessionStorage.setItem('user', JSON.stringify(loggedInUser));
  }

  removeLoggedInUser() {
    sessionStorage.removeItem('user');
  }

  getLoggedInUser(): User {
    return JSON.parse(sessionStorage.getItem('user')!);
  }

  isUserLoggedIn(): boolean {
    return sessionStorage.getItem('user') !== null;
  }

  setProductsToStorage(products: Home[]) {
    localStorage.setItem('products', JSON.stringify(products));
  }

  getProductsFromStorage(): Home[] {
    return JSON.parse(localStorage.getItem('products')!);
  }

  setCartToStorage(cart: Cart[]) {
    // console.log("empty");
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCartFromStorage(): Cart[] {
    this.cart = JSON.parse(localStorage.getItem('cart')!);
    return this.cart;
    // return JSON.parse(localStorage.getItem('cart')!);
  }

  getCartCount(): number {
    this.cart = this.getCartFromStorage();
    if (this.cart.length > 0) {
      let userCart: Home[] = this.cart.find(
        (uc) => uc.user === this.getLoggedInUser().id
      )?.products!;
      // console.log(userCart);
      return this.cart.length;
    } else {
      return 0;
    }
  }

  removeUserCart(userId: number) {
    this.cart = this.getCartFromStorage();
    this.cart = this.cart.filter((usercart) => usercart.user !== userId);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  setOrdersToStorage(orders: Orders[]) {
    // console.log(orders);
    localStorage.setItem('orders', JSON.stringify(orders));
  }

  getOrdersFromStorage(): Orders[] {
    return JSON.parse(localStorage.getItem('orders')!);
  }
}
