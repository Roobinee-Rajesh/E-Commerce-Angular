import { Component, OnInit } from '@angular/core';
import { ECommerceService } from './service/e-commerce.service';
import { StorageService } from './service/storage.service';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'E-Commerce';
  constructor(
    private storageService: StorageService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.storageService.loadUsers();
  }
  isLoggedInUser(): boolean {
    return this.authService.isLoggedInUser();
  }
}
