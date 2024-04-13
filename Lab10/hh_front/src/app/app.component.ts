import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CompaniesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hh_front';
}
