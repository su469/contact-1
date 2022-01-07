import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../model/user';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) {}
  getdata():Observable<Data[]>{
 return this.http.get<Data[]>(`http://localhost:3000/user/`).pipe(
   map((res)=>{
     console.log("ggg",res);
     return res;
   })
 )
 
  }
  postdata(data:any):Observable<Data>{
    return this.http.post<Data>(`http://localhost:3000/user/`,data).pipe(
      map((res)=>{
        console.log("gdd",res);
        return res;
      })
    )
  }
  deletedata(id:any):Observable<Data>{
    return this.http.delete<Data>(`http://localhost:3000/user/`+id).pipe(
      map((res)=>{
        console.log("deletedata",res);
        return res;
      })
    )
  }
  editdata(id:any,data:any):Observable<Data>{
    return this.http.put<Data>(`http://localhost:3000/user/${id}`,data).pipe(
      map((res)=>{
        console.log("updatedata",res);
        return res;
      })
    )
  }
  

}
