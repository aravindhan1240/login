import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  showErrorMessage = false;

  constructor(private router: Router) { }

  submitForm(): void {
    if (this.email.length > 0 && this.password.length > 0) {

      const userName = this.email.split('@')[0];
      this.router.navigate(['/welcome', userName]);
    }
    else{
      this.showErrorMessage= true
    }
  }
}
