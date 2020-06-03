import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';


// export interface Client{
//   id : number;
//   full_name : string;
//   email : string;
//   mobile_no : number;
// }
@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent implements OnInit {
// clients : Client[];
client;
message:string;
pageNo = 0;
itemsPerPage = 2;
totalItems ;
fieldName;
searchValue;
  constructor(private clientService : ClientService,
    private router:Router ) {
      this.getClient(this.fieldName);
   }

  ngOnInit() : void{
    this.clientService.getDataByPage(this.pageNo , this.itemsPerPage , null).subscribe(response => {
      console.log(response);
      this.client = response.content;
      this.totalItems = response.totalElements;
    });
  }
  getClient(fieldName){
    this.clientService.getDataByPage(this.pageNo , this.itemsPerPage, fieldName).subscribe(response => {
      console.log(response);
      this.client = response.content;
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

  deleteClient(client){
    this.clientService.deleteData(client).subscribe(response =>{
      console.log(response);
      if(response.error === false){
        this.getClient(null);
        this.message = response.message;
        setTimeout(() =>{
          this.message = null;
        },5000);
      }
    });
  }


}
