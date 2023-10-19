import { Component, OnInit } from '@angular/core';
import { Home } from 'src/app/model/e-commerce';
import { CartService } from 'src/app/service/cart.service';
import { HomeService } from 'src/app/service/home.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private homeService: HomeService,
    private storageService: StorageService,
    private cartService:CartService
  ) {}
  productsComponents: Home[] = [];
  btnText: string = 'Add';

  addToCart (id: number){
    // console.log(id);
    this.cartService.addToCart(id);
  };

  ngOnInit(): void {
    this.homeService.getAllProducts().subscribe({
      next: (data: Home[]) => {
        // console.log(data);
        this.productsComponents = data;
        this.storageService.setProductsToStorage(data);
      },
      complete: () => {
        // console.log('complete');
      },
      error: (error: Error) => {
        console.log('Message:', error.message);
        console.log('Message:', error.name);
      },
    });
  }
}
