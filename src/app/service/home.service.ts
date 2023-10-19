import { Injectable } from '@angular/core';
import { Home } from '../model/e-commerce';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private http:HttpClient) { }
  getAllProducts():Observable<Home[]>{
    return this.http.get<Home[]>("https://fakestoreapi.com/products");
    }

  }
