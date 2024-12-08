import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  private apiUrl = 'http://localhost:3000/shows';

  constructor(private http: HttpClient) {}

  getShows(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addShow(show: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, show);
  }

  updateShow(id: number, show: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, show);
  }

  deleteShow(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
