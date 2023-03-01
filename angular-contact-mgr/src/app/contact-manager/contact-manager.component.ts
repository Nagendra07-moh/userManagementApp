import { Component,OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit  {
    constructor(private myser:RestApiService,private object:EditContactComponent){}
    allContact:any
    uniqueNames:any = new Set([])
    ngOnInit(): void {
      this.myser.show().subscribe((data:any)=>{
        this.allContact = data
        this.TempList = this.allContact
        console.log(data)
      },(err)=>{
        console.log(err)
      })
    }

    imp:any
    TempList:any[] = []
    searchData(){
      if(!this.imp){
        this.TempList = this.allContact
      }
      this.TempList = []
      console.log(this.imp);
      let size = this.imp.length;
      for(let i = 0;i<this.allContact.length;i++){
        const s =  this.allContact[i].name.substring(0,size);
        if(s.toUpperCase() === this.imp.toUpperCase()){
          this.TempList.push(this.allContact[i])
        }
      }
    }
    
  del(i:any){
    this.myser.del(i).subscribe((data)=>{
      console.log(data)
      this.allContact.splice(i,1)
    },(err)=>{
     console.log(err)
    })
  }

  // ind:any
  // update(i:any){
  //   this.ind = i;
  //   let object2 = this.object.new_obj

  // }
    
    

  

}
