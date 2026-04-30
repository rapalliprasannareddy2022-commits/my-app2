import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles:any=[];
  constructor(private vehicleService:VehiclesService){
    vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (error:any)=>{
        alert("interanal server error");
      }
      )
    
    
    
  }
  column:string="";
  order:string="";
  sortVehicle(){
   this.vehicleService
   .getsortvehicles(this.column,this.order).subscribe(
    (data:any)=>{
      this.vehicles=data;
    },
    (error:any)=>{
      alert("invalid server error");

    }

   )


  }
  pagevehicles(page:number){
    this.vehicleService.getpagevehicles(page).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (error:any)=>{
        alert("invalid server service");
      }
    )
  }
  deleteVehicle(id:string){
    this.vehicleService.deleteVehicles(id).subscribe(
      (data:any)=>{
        alert("deleted sucuessfully");
        location.reload();
      },
      (error:any)=>{
        alert("dleted failed");

      }
      )
    
  }
  term:string="";
  filtervehicle(){
    this.vehicleService.getFilteredvehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (error:any)=>{
        alert("internal server error");

      }
    )
  }
  getvehiclesWithParams(page:number=1){
    this.vehicleService.getvehiclesWithParams(this.term,this.column,this.order,page).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (error:any)=>{
        alert("invalid server error");
      }
    )
  }

}
