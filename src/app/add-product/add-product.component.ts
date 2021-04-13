import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { ProductService } from '../product.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productDetails:FormGroup;

  constructor(private formbuilder: FormBuilder,
    private productService:ProductService ,
    private router:Router) { }

  ngOnInit(): void {
    this.productDetails=this.formbuilder.group({
      title:["",Validators.required],
      imageUrl:["",Validators.required],
      description:["",Validators.required],
    })
  }

  onSubmit(){
    if(this.productDetails.valid){
      console.log("this is valid",this.productDetails.value);
      this.productService.addProductDetails(this.productDetails.value).subscribe((res:any)=>{
        this.productDetails.reset();
        console.log(this.productDetails.value);
        if(res){this.router.navigate([""]);
        alert("Form submitted succesfully");
        }   
      });
  }
}
}
