import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  endpoint = 'http://localhost:8080/reminders';

  constructor(private httpClient: HttpClient) {}
  getRemindersByUserId(userId: number) {
    return this.httpClient.get(`${this.endpoint}/byuser/${userId}`);
  }
  
  getReminders() {
    return this.httpClient.get(this.endpoint);
  }

  deleteReminder(id: number) {
    return this.httpClient.delete(this.endpoint + `/${id}`);
  }
  addReminder(date:string, info:string):Observable<string> {
    return this.httpClient.post<string>(this.endpoint, {date,info}, httpOptions);
  }
  editReminder(id:number, date:string, info:string):Observable<string> {
    return this.httpClient.put<string>(this.endpoint +`/${id}` , {date,info}, httpOptions);
  }
}