import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {
  isAuthenticated: boolean = false;
  userIsAuthenticated: boolean = false;
  users: any = [];
  constructor(
    private usersService: UsersService,
    private formBuilder: FormBuilder
  ) {}
  formLogin!: FormGroup;
  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: [''],
      password: [''],
    });
    this.getUsers();
  }
  getUsers() {
    this.usersService.getUsers().subscribe((response) => {
      this.users = response;
    });
  }

  getUsersLogin() {
    const email = this.formLogin.get('email')?.value;
    const password = this.formLogin.get('password')?.value;

    this.usersService.getUsers().subscribe((response) => {
      this.users = response;
      let usuarioEncontrado = false;
      for (let user of this.users) {
        if (user.email === email && user.password === password) {
          console.log('Usuario encontrado y las credenciales coinciden');

          console.log(user.id);

          this.usersService.setUserId(user.id);

          usuarioEncontrado = true;
          break;
        }
      }

      if (usuarioEncontrado) {
        this.userIsAuthenticated = true;
        this.usersService.setAuthenticatedState(true);
      }
    });
  }
}
