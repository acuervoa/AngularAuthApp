import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: []
})
export class NavBarComponent {


  constructor( public auth: AuthService) {
    auth.handleAuthentication();
  }

  login(){
    this.auth.login();
  }

  salir() {
    this.auth.logout();
  }

}
