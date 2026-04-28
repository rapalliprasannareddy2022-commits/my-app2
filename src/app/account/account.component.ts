import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  account:any =[];
  constructor(private accountservice:AccountService ){
    accountservice.getAccount().subscribe(
      (data:any)=>{
        this.account=data;
      },
      (error:any)=>{
        alert("internal server error");
      }
    )
  }



        
  }
  




