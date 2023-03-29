import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Datainterface } from '../interface/datainterface';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
apiUrl="http://localhost:3000/data"
  constructor(private http:HttpClient) {

   }
all():Observable<Datainterface[]>{
  return this.http.get<Datainterface[]>(this.apiUrl)
}
newdata(data:any):Observable<Datainterface[]>{
  return this.http.post<Datainterface[]>(this.apiUrl,data)
}
deleteData(id:string):Observable<Datainterface>{
  return this.http.delete<Datainterface>(`${this.apiUrl}/${id}`)
}
  }
