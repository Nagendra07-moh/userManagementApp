import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) {}
  private url = "http://localhost:5000";
  allContact:any
  show() {
    return this.http.get(this.url + '/show');
  }

  addContact(obj:any){
    return this.http.post(this.url + '/add',obj)
  }

  del(ind:any){
    return this.http.post(this.url + '/del',ind)
  }

  
}
