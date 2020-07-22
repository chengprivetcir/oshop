import { ProductService } from './../../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {
 products:Product[];
 subscription:Subscription;
 filterProducts:Product[];

  constructor(private productService:ProductService) {
    this.subscription = this.productService.getAll().subscribe(p=>this.filterProducts=this.products=p);

   }

   filter(query:string)
   {
    this.filterProducts = (query)?
    this.filterProducts.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())):
    this.products;
   
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
