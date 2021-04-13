import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  products:any=[];
  isLoading=true;
  con_msg:boolean;
  msg:any=false;
  constructor(private productService:ProductService,
    private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  onDelete(id:any){
    this.con_msg=confirm("Do u want to delete this item for sure");
    if(this.con_msg===true){
      this.productService.deleteProduct(id).subscribe(()=>{this.fetchData();
        console.log(id);
      })
    }
    
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
