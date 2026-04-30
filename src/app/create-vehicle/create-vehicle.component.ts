import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  vehicleForm: FormGroup= new FormGroup({
    vehicle:new FormControl(),
    manufacturer:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    fuel:new FormControl(),
    color:new FormControl(),
    image:new FormControl(),
  })
  constructor(private vehicleService:VehiclesService){}
  submit(){
    console.log(this.vehicleForm);
    this.vehicleService.createVehicles(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("created sucessfully");
        this.vehicleForm.reset();
      },
      (error:any)=>{
        alert("creation filled");
      }
    )
  }
}
