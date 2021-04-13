import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:any=null;
  isLoading=true;
  constructor( private productService: ProductService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.productService.getProductDetails(params.id)
      .subscribe(res=>{
        this.product=res
      },err=>{
        console.log(err)
      },()=>{
        this.isLoading=false;
      })
    })
  }

}
