import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  public totalItem : any;

  constructor(private cartService : CartService) { }

}
