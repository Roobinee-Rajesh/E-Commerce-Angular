import { Component } from '@angular/core';
import { Orders } from 'src/app/model/e-commerce';
import { OrdersService } from 'src/app/service/orders.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  
  constructor(
    private ordersService: OrdersService,
    private storageService: StorageService
  ) {}
  getOrders():Orders[]{
    console.log(this.ordersService.getOrders() as Orders[]);
  return this.ordersService.getOrders() as Orders[];
  }
}
