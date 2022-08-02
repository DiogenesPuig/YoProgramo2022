import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  URL='http://localhost:8080/experience/'

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(this.URL + 'get');
  }
  
  public save(experience: Experience): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', experience);
  }

  public update(id: number,experience: Experience): Observable<any> {
    return this.httpClient.put<any>(this.URL + `edit/${id}`, experience);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
