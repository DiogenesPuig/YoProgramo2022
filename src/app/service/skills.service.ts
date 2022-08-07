import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  URL='http://localhost:8080/skill/'

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.URL + 'get');
  }

  public detail(id:number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.URL + `get/${id}`)
  } 
  
  public save(skill: Skill): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', skill);
  }

  public update(id: number,skill: Skill): Observable<any> {
    return this.httpClient.put<any>(this.URL + `edit/${id}`, skill);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
