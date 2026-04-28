import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
   products:any = [
  { id:1, name:"pen", price:10, rating:3, freeDelivery:true },
  { id:2, name:"phone", price:100, rating:2, freeDelivery:false },
  { id:3, name:"shirt", price:400, rating:4, freeDelivery:true },
  { id:4, name:"cap", price:200, rating:5, freeDelivery:false },
  { id:5, name:"mobile case", price:300, rating:2, freeDelivery:true },
  { id:6, name:"remote", price:400, rating:2.5, freeDelivery:false }
];
term:string="";
// search(){
//   this.products=this.products.filter(product:any)=>product.name.includes(this.term))
// }
onlyFreeDelivery(){
  // *ngIf="user.freeDelivery==true"
  this.products=this.products.filter((product:any)=>product.freeDelivery===true);
}
name:any="";
price:any=0;
rating:any=0;
freeDelivery:boolean=true;
 addcart(){
  let product={
    name:this.name,
    price:this.price,
    rating:this.rating,
    freeDelivery:this.freeDelivery

  };
  this.products.push(product);
 }
pricelowtohigh(){
  this.products.sort((a:any,b:any)=>a.price-b.price);
}
pricehightolow(){
  this.products.sort((a:any,b:any)=>b.price-a.price);
}
ratinghightolow(){
  this.products.sort((a:any,b:any)=>b.rating-a.rating);
}
ratinglowtohigh(){
  this.products.sort((a:any,b:any)=>a.rating-b.rating);
}
discount(){
  this.products.map((product:any)=>product.price=product.price/2);
}
priceWithDeliveryCharges(){
  this.products.map((product:any)=>product.price=product.price+10);
}
totalprice(){
  let total=this.products.reduce((agg:number,product:any)=>agg+product.price,0);
  alert("totalprice:"+total);
}
totalItems(){
  let totalcartitems=this.products.length;
  alert("Total Cart Items:"+totalcartitems);
}

delete(i:number){
  this.products.splice(i,1);
}
}

