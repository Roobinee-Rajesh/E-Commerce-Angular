import { Injectable } from '@angular/core';
import { Home, Orders} from 'src/app/model/e-commerce';
@Injectable({
  providedIn: 'root',
})
export class ECommerceService {

//   private productsService: Home[] = [];

//   cartService: Home[] = [];
//   ordersService: Orders[] = [];
//   total: number = 0;
//   cartLength: number = 0;

//   constructor() {}
//   getProducts = (): Home[] => {
//     return this.productsService;
//   };
//   getCartItems = (): Home[] => {
//     return this.cartService;
//   };
//   getCartLength = () => {
//     return this.cartService.length;
//   };
//   getOrders = () => {
//     return this.ordersService;
//   };

//   addToCart = (id: number) => {
//     let addProduct: Home = this.productsService.find((c) => c.id === id)!;
//     // console.log(addProduct);
//     let addProductIndex: number = this.cartService.findIndex(
//       (c) => c.id === id
//     )!;
//     // console.log(addProductIndex);
//     if (addProductIndex !== -1) {
//       // console.log(this.cartService);
//       this.cartService[addProductIndex] = {
//         ...addProduct,
//         count: this.cartService[addProductIndex].count + 1,
//       };
//     } else {
//       this.cartService.push({ ...addProduct, count: 1 });
//     }
//     this.getCartLength();
//     return this.cartService;
//   };

//   getCartTotal = () => {
//     // Assuming this.cartService is an array of items
//     for (let item of this.cartService) {
//       this.total += item.count * item.price; // Calculate the total cost for each item
//     }
//     return this.total; // Return the total cost
//   };

  // checkOut = () => {
  //   this.ordersService.push({
  //     timestamp: Date.now(),
  //     products: this.cartService as Cart[],
  //     total: this.total,
  //   });
  //   this.cartService = [];
  //   return this.ordersService;
  // };
}
