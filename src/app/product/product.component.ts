import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Product!: FormGroup
  AllCategory: string[] = []
  AllProductName: string[] = []
  constructor(private el: FormBuilder) {

  }

  ngOnInit(): void {
    this.createproduct()
    this.AllCategory = Object.keys(this.Productobj)
    
    this.Product.get('Category')?.valueChanges.subscribe((el: any) => {
      console.log(el)
       this.Product.get("ProductName")?.updateValueAndValidity()
      this.AllProductName = this.Productobj[el]
      console.log(this.AllProductName)
     

    })
      
    this.Product.get('Quantity')?.valueChanges.subscribe((el: any) => {
      this.Product.get('totalprice')?.updateValueAndValidity()
      var calculation =this.Product.value.Quantity*this.Product.value.Price
      
      this.Product.get('totalprice')?.setValue(calculation)
     })
    this.Product.get('Price')?.valueChanges.subscribe((el:any)=>{
      this.Product.get('totalprice')?.updateValueAndValidity()
      var cal=this.Product.value.Quantity*this.Product.value.Price
      this.Product.get('totalprice')?.setValue(cal)
    })
    
    
  }
  createproduct() {
    this.Product = this.el.group({
      "Category": ['', [Validators.required]],
      'ProductName': ['', [Validators.required]],
      'Quantity': ['', [Validators.required]],
      'Price': ['', [Validators.required]],
      'totalprice': ['', [Validators.required]]
    })
  }
  Productobj:any={
    'Electronics':['Mobile', 'Laptop', 'Tv'],
    'Books':['Gitanjali', 'HindSwaraj']
  }
  
  productlist(){
    let obj:any={
      
      "Category":'Books',
      "ProductName":'HindSwaraj',
      'Quantity':2,
      'Price': 10,
      'totalprice': 20

    }
    
    this.Product.patchValue(obj)
   }
  
  
  get Category() {
    return this.Product.get('Category')
  }
  get ProductName() {
    return this.Product.get('ProductName')
  }
  get Quantity() {
    return this.Product.get('Quantity')
  }
  get Price() {
    return this.Product.get('Price')
  }
  get totalprice() {
    return this.Product.get('totalprice')
  }
  
  reset(){
    this.Product.reset()
  }

}
