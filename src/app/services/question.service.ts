import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private baseUrl = 'http://localhost:8080/question';

  constructor(private http: HttpClient) { }

  getQuestion(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createQuestion(question: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, question);
  }

  // updateQuestion(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${id}`,value);
  // }
  updateQuestion(question: Object, id: number): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, question);
  }

  deleteQuestion(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getQuestionList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
