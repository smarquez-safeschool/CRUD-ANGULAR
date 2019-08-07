import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector : 'app-productlist',
    templateUrl : './product-list.component.html',
    styleUrls : ['./product-list.component.css']

})
export class ProductListComponent implements OnInit{

    products : Product[] = []

    constructor( private productService : ProductService){}
    ngOnInit(): void {
        this.products = this.getProducts();
    }

    getProducts(){
        return this.products = this.productService.getProducts();
    }

    eliminarProducto(id : number){
        this.products = this.productService.deleteProduct(id);
    }


}