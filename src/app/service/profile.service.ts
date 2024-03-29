import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../model/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  URL='http://localhost:8080/profile/'

  constructor(private httpClient: HttpClient) { }

  public getProfiles(): Observable<Profile[]>{
    return this.httpClient.get<Profile[]>(this.URL+ 'get');
  }

  public get(id: number): Observable<Profile>{
    return this.httpClient.get<Profile>(this.URL+ `get/${id}`);
  }

  public detail(id:number): Observable<Profile>{
    return this.httpClient.get<Profile>(this.URL + `get/${id}`)
  }

  public update(id: number,skill: Profile): Observable<any> {
    return this.httpClient.put<any>(this.URL + `edit/${id}`, skill);
  }
}
