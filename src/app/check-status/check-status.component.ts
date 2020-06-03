import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.css']
})
export class CheckStatusComponent implements OnInit {

  constructor(private clientService : ClientService) {
    this.getDetails();
   }
  users;
  ngOnInit() {
  }
  getDetails(){
    let  userData = JSON.parse(localStorage.getItem('userData'));
    let userId = userData.userId;
    this.clientService.getMyDetails(userId).subscribe(response => {
      console.log(response);
      this.users = response.data;
    });
  }
}

