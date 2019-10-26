import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  private baseUrl = 'http://localhost:8080/topic';

  constructor(private http: HttpClient) { }

  getTopic(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createTopic(topic: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, topic);
  }

  // updateTopic(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${id}`,value);
  // }
  updateTopic(topic: Object, id: number): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, topic);
  }

  deleteTopic(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getTopicList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
