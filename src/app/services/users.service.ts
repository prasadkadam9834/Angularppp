
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
baseurl:string=" http://localhost:3000/";
headers:HttpHeaders=new HttpHeaders().set("content-type","Angular/json")
  constructor(private http:HttpClient) { }

  SaveDataToServer(endpoint:any){
    const Url=this.baseurl+endpoint;
    return this.http.get(Url,{headers:this.headers})
  }
  PostDataToServer(endpoint:any,body:any){
    const Url=this.baseurl+endpoint;
    return this.http.post(Url,body,{headers:this.headers})
  }
}
