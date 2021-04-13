import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  products:any=[];
  isLoading=true;
  constructor(private productService:ProductService ) { }

  ngOnInit(): void {
    this.fetchData();
  }
  onDelete(id:any){
    this.productService.deleteProduct(id).subscribe(()=>{this.fetchData();
      console.log(id);
    })
  }
  fetchData(){
    this.productService.getProducts().subscribe(res=>{
      this.products=res;
    },err=>{
      console.log(err)
    },()=>{
      this.isLoading=false;
    })
  }
}
