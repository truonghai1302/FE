import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private baseUrl = 'http://localhost:8080/api/v1/tests';

  constructor(private http: HttpClient) { }
  getTest(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTest(test: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, test);
  }

  // updateTest(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${id}`,value);
  // }
  updateTest(test: Object, id: number): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, test);
  }

  deleteTest(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getTestList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
