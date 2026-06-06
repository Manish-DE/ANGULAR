import { Component, signal, WritableSignal } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './Profile/Profile.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, ProfileComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  count = 0;
  data : WritableSignal<number | string> = signal<number | string>(10);
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
  reset() {
    this.count = 0;
  }

  updateSignal() {
    this.data.set('Angular 22');
  }
}
