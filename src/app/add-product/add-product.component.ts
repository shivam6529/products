import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {postData,respData} from '../postDataObj';
import { ProductService } from '../product.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productDetails:FormGroup;
  data:string;
  posData:postData;
  resultData:respData;

  constructor(private formbuilder: FormBuilder,
    private productService:ProductService ,
    private router:Router) { }

  ngOnInit(): void {
    this.productDetails=this.formbuilder.group({
      title:["",Validators.required],
      image_url:["",Validators.required],
      desc:["",Validators.required],
    })
  }

  onSubmit(){
    if(this.productDetails.valid){
      console.log("this is valid",this.productDetails.value);
      this.posData=new postData;
      this.posData.title=this.productDetails.value.title;
      this.posData.imageUrl=this.productDetails.value.image_url;
      this.posData.description=this.productDetails.value.desc;
      this.productService.addProductDetails(this.posData).subscribe((res:respData)=>{
        this.resultData=res;
        console.log(this.resultData.id);
        if(this.resultData.id){this.router.navigate([""]);}
      });
  }
  
}
}
