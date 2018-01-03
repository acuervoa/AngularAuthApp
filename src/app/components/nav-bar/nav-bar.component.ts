import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: []
})
export class NavBarComponent {

<<<<<<< HEAD
  constructor( pubic auth: AuthService) {
=======
  constructor( public auth: AuthService) {
>>>>>>> view google profile with auth0
    auth.handleAuthentication();
  }

  login(){
    this.auth.login();
  }

  salir() {
    this.auth.logout();
  }

}
