import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product : Product = {
    name : '',
    price : '',
    urlImg : ''
  };
  edit:boolean = false;

  constructor(private productService:ProductService ,private router:Router,private activedRouter : ActivatedRoute) { }

  ngOnInit() {
    let _id:number = this.activedRouter.snapshot.params.id;
    console.log('asdasdsa',_id);
    if(_id>-1){
      this.edit = true;
      console.log(_id);
      this.product = this.productService.getProduct(_id);
      console.log(this.product);
    }
  }

  registrar(){  
    console.log(this.product);
    this.productService.createProduct(this.product);
    this.router.navigate(['/']);
  }
  editar(){
    this.productService.updateProduct(this.product.id , this.product );
    this.router.navigate(['/']);
  }
}
