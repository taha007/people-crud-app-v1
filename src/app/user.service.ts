import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private getAllUsersUrl =
    'https://backend-people-crud-app.herokuapp.com/users';
  private getUserUrl = 'https://backend-people-crud-app.herokuapp.com/users/';
  private deleteUsersUrl =
    'https://backend-people-crud-app.herokuapp.com/users/';
  private addUserUrl =
    'https://backend-people-crud-app.herokuapp.com/users/add';
  private updateUserUrl =
    'https://backend-people-crud-app.herokuapp.com/users/update';
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<any>(this.getAllUsersUrl);
  }
  getUser(id: string) {
    return this.http.get<any>(this.getUserUrl + id);
  }
  deleteUser(id: string) {
    return this.http.delete<any>(this.deleteUsersUrl + id);
  }
  addUser(user: User) {
    return this.http.post<any>(this.addUserUrl, user);
  }
  updateUser(user: User) {
    return this.http.put<any>(this.updateUserUrl, user);
  }
}
