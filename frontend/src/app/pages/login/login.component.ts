import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    console.log (this.username, this.password);
    if (this.username === 'admin' && this.password === 'password') {
      this.router.navigate(['/mainPage']);
    } else {
      alert('Invalid credentials');
    }
  }
}

