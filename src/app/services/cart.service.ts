import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items:CartItem[]=[];

  constructor() { }

  addToCart(product:Omit<CartItem,'quantity'> ){
    const existing =this.items.find(i => i.id === product.id);
    if(existing){
      existing.quantity++;
    }else{
      this.items.push({...product ,quantity:1});
    }
  }

  getItems():CartItem[]{
    return this.items
  }
  delete(item:CartItem){
   this.items = this.items.filter((i) => i.id !== item.id)
  }
  incrementQuantity(id:number){
    let item=this.items.find((i)=> i.id === id);
    if(item){
      item.quantity++;
    }
  }
    decrementQuantity(id:number){
    let item=this.items.find((i)=> i.id === id);
    if(item){
      item.quantity--;
    }else{
      this.delete(item!);
    }
  }
  getTotal():number{
    //  this.items.reduce((acc,item) =>{
    //   return acc + item.price * item.quantity;
    //  },0)
    return this.items.reduce((acc,item) => acc + item.price * item.quantity,0);
  }
}
