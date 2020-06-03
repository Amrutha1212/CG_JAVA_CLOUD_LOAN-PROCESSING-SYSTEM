import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  user;
  message: string;
  message1: string;
  searchValue;
  pageNo = 0;
  itemsPerPage = 2;
  totalItems ;
 fieldName;
// client;
// searchValue;
  constructor(private clientService : ClientService,
    private router:Router ) {
      this.getClient(this.fieldName);
   }

  ngOnInit() : void{
    this.clientService.getCustomerByPage(this.pageNo , this.itemsPerPage , null).subscribe(response => {
      console.log(response);
      this.user = response.content;
      this.totalItems = response.totalElements;
    });
  }
  getClient(fieldName){
    this.clientService.getCustomerByPage(this.pageNo , this.itemsPerPage, fieldName).subscribe(response => {
      console.log(response);
      this.user = response.content;
      this.totalItems = response.totalElements;
    });
  }

  getNextPageItems(event){
    console.log(event);
    this.pageNo = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.getClient(null);
  }
  getSortedData(){
    console.log(this.fieldName);
    this.getClient(this.fieldName); 
  }

}
