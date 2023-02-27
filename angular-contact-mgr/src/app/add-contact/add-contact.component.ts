import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  constructor(private ser:RestApiService,private router:Router){}
  dropList = ['Select1','Select2','Select3']
  name = ''
  url = ''
  number = ''
  email = ''
  Type = ''
  Title = ''
  drop = '' 

  save(){
    let obj:any = {}
    obj["name"] = this.name
    obj["url"] = this.url
    obj["number"] = this.number
    obj["email"] = this.email
    obj["Title"] = this.Title
    obj["Type"] = this.Type
    obj["drop"] = this.drop

    this.ser.addContact(obj).subscribe((data)=>{
      console.log(data)
    },(err)=>{
      console.log(err)
    })
  }   

  changeUrl(){
    this.router.navigateByUrl("/admin");
  }

    


  //   console.log(`Name: ${this.name} URL: ${this.url} NUM: ${this.number}`);
  // }

}
