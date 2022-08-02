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

  public getProfile(): Observable<Profile[]>{
    return this.httpClient.get<Profile[]>(this.URL+ 'get');
  }
}
