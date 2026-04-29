import { Component } from '@angular/core';
import { FlipcartService } from '../flipcart.service';

@Component({
  selector: 'app-flipcart',
  templateUrl: './flipcart.component.html',
  styleUrls: ['./flipcart.component.css']
})
export class FlipcartComponent {
  flipcart:any=[];
  constructor(private flipcartservice:FlipcartService){
    flipcartservice.getflipcart().subscribe(
      (data:any)=>{
        this.flipcart=data;
      },
      (error:any)=>{
        alert("internal service error");
      }

    )

    
    

}
}

