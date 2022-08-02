import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Studies } from '../model/studies';

@Injectable({
  providedIn: 'root'
})
export class StudiesService {

  URL='http://localhost:8080/studies/'

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Studies[]>{
    return this.httpClient.get<Studies[]>(this.URL + 'get');
  }
  
  public save(studies: Studies): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', studies);
  }

  public update(id: number,studies: Studies): Observable<any> {
    return this.httpClient.put<any>(this.URL + `edit/${id}`, studies);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
