import { Component } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],


})
export class DirectivesComponent {
  states:string[]=["Telagana","Andhara","Karnataka","Kerala"];
  users:any=[
    {name:'kay',age:20},
    {name:'net',age:30},
    {name:'lll',age:40},
    {name:'kkkk',age:50}

  ];
  isShow:boolean=true;

}
