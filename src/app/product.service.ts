import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl="https://sheltered-springs-67444.herokuapp.com/";


  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(this.baseUrl+'product');
  }

  getProductDetails(id:any){
    return this.http.get(this.baseUrl+'product/'+ id);
  }

  addProductDetails(data: any){
    return this.http.post(this.baseUrl+'product',data);
  }
  deleteProduct(id:any){
    return this.http.delete(this.baseUrl+'product/'+id)
  }
}
