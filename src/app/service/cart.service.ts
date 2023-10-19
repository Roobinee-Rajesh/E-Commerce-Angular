import { Injectable } from '@angular/core';
import { Cart, Home, User } from '../model/e-commerce';
import { StorageService } from './storage.service';
import { count } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private storageService: StorageService) {}
  products: Home[] = this.storageService.getProductsFromStorage();

  loggedInUser: User = this.storageService.getLoggedInUser();

  addToCart(id: number) {
    let cart: Cart[] = this.storageService.getCartFromStorage();
    // console.log(id);
    let clickedProduct: Home = this.products.find(
      (product) => product.id === id
    )!;
    // console.log(this.cart);
    if (clickedProduct) {
      let userCart: Cart = cart.find((u) => u.user === this.loggedInUser.id)!;
      // console.log(userCart);

      if (userCart) {
        // console.log(this.cart);
        let productInUserCart: Home = userCart.products.find(
          (product) => product.id === id
        )!;

        if (productInUserCart) {
          let newCartOfProducts: Home[] = [];
          for (let product of userCart.products) {
            if (product.id === id) {
              newCartOfProducts.push({ ...product, count: product.count! + 1 });
            } else {
              newCartOfProducts.push(product);
            }
          }
          userCart.products = newCartOfProducts;
        } else {
          userCart.products.push({ ...clickedProduct, count: 1 });
        }

        let updatedCart: Cart[] = cart.filter(
          (userCart) => userCart.user !== this.loggedInUser.id
        );
        updatedCart.push(userCart);
        this.storageService.setCartToStorage(updatedCart);
      } else {
        // console.log('enter');
        cart.push({
          user: this.loggedInUser.id!,
          products: [{ ...clickedProduct, count: 1 }],
        });
        this.storageService.setCartToStorage(cart);
      }
    }
  }

  // getCartCount(): number {
  //   // console.log(this.cart.length);
  //   let cart: Cart[] = this.storageService.getCartFromStorage();
  //   let userCart:Home[]=cart.find((uc)=>uc.user===this.loggedInUser.id)?.products!;
  //   console.log(userCart.length);
  //   return userCart.length;
  // }

  getCart(): Home[] {
    let cart: Cart[] = this.storageService.getCartFromStorage();
    if (cart.length > 0) {
      let userCart: Home[] = cart.find((uc) => uc.user === this.loggedInUser.id)
        ?.products!;
        return userCart;
    }
    else{
      return [];
    }

    // console.log(userCart);
    
  }

  getCartTotal(): number {
    let total = 0;
    let cart: Cart[] = this.storageService.getCartFromStorage();
    if(cart.length>0){
    let userCart: Home[] = cart.find((uc) => uc.user === this.loggedInUser.id!)
      ?.products!;
    for (let product of userCart) {
      total += product.count! * product.price;
    }
    return total;
  }
  return 0;
}
}
