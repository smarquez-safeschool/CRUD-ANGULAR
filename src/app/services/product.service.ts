import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product[] = []

  constructor() { }

  getProducts(){
    return this.products;
  }

  getProduct(id:number){
    return this.products.find( product => product.id == id );
  }

  createProduct(product : Product){
    product.id = this.products.length+1;
    return this.products.push(product);
  }

  deleteProduct(id : number){
    const index = this.products.indexOf(this.getProduct(id));
    return this.products.splice(index,1);
  }

  updateProduct(id : number , newProduct : Product ){
    const index = this.products.indexOf(this.getProduct(id));
    return this.products[index] = newProduct;
  }

}
