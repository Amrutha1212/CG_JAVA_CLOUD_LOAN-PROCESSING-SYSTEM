import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  userId: any;

  constructor(private http : HttpClient , 
    private router : Router) { }

  postData(client){
    return this.http.post<any>('http://localhost:8080/api/addUser', client);
}
 

getData(){
  return this.http.get<any>('http://localhost:8080/api/getUser');
}

deleteData(client){
  return this.http.delete<any>(`http://localhost:8080/api/deleteUser/${client.userId}`);
}
getDataByPage(pageNo , itemsPerPage , sortBy){
  if(!sortBy){
  return this.http.get<{content : any[] , totalElements : number}>(`http://localhost:8080/api/getUserByPage/${pageNo}/${itemsPerPage}`);
}else{
  return this.http.get<{content : any[] , totalElements : number}>(`http://localhost:8080/api/sortUser/${pageNo}/${itemsPerPage}/${sortBy}`);
}
}


loginUser(userCredentials){
  return this.http.post<any>('http://localhost:8080/api/login', userCredentials);
}

isCustomer(): boolean{
  const userData = JSON.parse(localStorage.getItem('userData'));
  if(userData && userData.role === 'ROLE_CUSTOMER'){
    return true;
  }else{
    return false;
  }
}

isAdmin(): boolean{
  const userData = JSON.parse(localStorage.getItem('userData'));
  if(userData && userData.role === 'ROLE_ADMIN'){
    return true;
  }else{
    return false;
  }
}

isApproval(): boolean{
  const userData = JSON.parse(localStorage.getItem('userData'));
  if(userData && userData.role === 'ROLE_APPROVAL'){
    return true;
  }else{
    return false;
  }
}

isLogged(): boolean{
  const userData = JSON.parse(localStorage.getItem('userData'));
  if(userData){
    return true;
  }else{
    return false;
  }
}

logout(){
  localStorage.clear();
  this.router.navigateByUrl('/login');
}

getMyDetails(userId){
  // this.userId = JSON.parse(localStorage.getItem('user')).userId;
  // return this.http.get(`http://localhost:8080/api/getUserById/${this.userId}`, { params: { userId: this.userId}});
return this.http.get<any>(`http://localhost:8080/api/getUserById/${userId}`)
}

postApplication(email, applyloan){
  return this.http.post<any>(`http://localhost:8080/api/makeloan/${email}`, applyloan);
}

getCustomer(){
  return this.http.get<any>('http://localhost:8080/api/getCustomer');
}

getApplicantByPage(pageNo , itemsPerPage , sortBy){
  if(!sortBy){
  return this.http.get<{content : any[] , totalElements : number}>(`http://localhost:8080/api/getRequested/${pageNo}/${itemsPerPage}`);
}else{
  return this.http.get<{content : any[] , totalElements : number}>(`http://localhost:8080/api/getSortRequested/${pageNo}/${itemsPerPage}/${sortBy}`);
}
}

getCustomerByPage(pageNo, itemsPerPage, sortBy) {
  if (!sortBy) {
    return this.http.get<{ content: any[], totalElements: number }>(`http://localhost:8080/api/getCustomer/${pageNo}/${itemsPerPage}`);
  } else {
    return this.http.get<{ content: any[], totalElements: number }>(`http://localhost:8080/api/getSortCustomer/${pageNo}/${itemsPerPage}/${sortBy}`);
  }
}

}
