import { Component } from '@angular/core';
import { Data } from '../model/user';
import { ContactService } from './contact.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile';
  user: any;
  searchText:any;
  
  showsubmit!:boolean
  showupdate!:boolean
  
  
  data = new Data();
 
  constructor(private cs: ContactService) {

  }

  ngOnInit(): void {
    this.getusers();
  }

  getusers() {
    this.cs.getdata().subscribe((res) => {
      this.user = res;
      //console.log(res);
    })
  }
  

  updateform(){
    
   
    this.cs.editdata(this.data.id, this.data).subscribe((res: any) => {
      alert("successfully Updated");
      this.getusers();
  })
  }
 
  submitform()
{
  
      this.cs.postdata(this.data).subscribe((res) => {
        console.log(res);
        this.getusers();
      })
    

    
  }
  deleteuser(id: any) {
    this.cs.deletedata(id).subscribe((res) => {
      alert("do you want to delete");
    })

  }
  updatedata(value:any) {
    this.showsubmit = false;
    this.showupdate = true;
    
    this.cs.getdata().subscribe((res) => {
      res.map((item: any) => {
        if (item.id == value) {
         
          this.data.id = item.id;
          this.data.name = item.name;
          this.data.email = item.email;
        }
      })
    })
  }
  showbox(){
    this.showsubmit = true;
    this.showupdate =false;
    
  }
  


}
