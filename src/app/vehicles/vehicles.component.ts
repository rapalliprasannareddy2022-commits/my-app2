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

}
