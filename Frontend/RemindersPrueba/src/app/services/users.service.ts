import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private userIdSource = new BehaviorSubject<number | null>(null);
  currentUserId$ = this.userIdSource.asObservable();
  private isAuthenticatedSource = new BehaviorSubject<boolean>(false);
isAuthenticated$ = this.isAuthenticatedSource.asObservable();

setAuthenticatedState(state: boolean) {
  this.isAuthenticatedSource.next(state);
}


  setUserId(id: number) {
    this.userIdSource.next(id);
  }

  endpoint = 'http://localhost:8080/users';

  constructor(private httpClient: HttpClient) {}


  getUsers() {
    return this.httpClient.get(this.endpoint);
  }

  deleteUsers(id: number) {
    return this.httpClient.delete(this.endpoint + `/${id}`);
  }
  addUsers(email:string, password:string):Observable<string> {
    return this.httpClient.post<string>(this.endpoint, {email,password}, httpOptions);
  }
  editUsers(id:number, email:string, password:string):Observable<string> {
    return this.httpClient.put<string>(this.endpoint +`/${id}` , {email,password}, httpOptions);
  }
}
