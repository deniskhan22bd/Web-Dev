import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Company } from '../models';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent {
  companies !: Company[]

  constructor(private apiService: ApiService){

  }

  ngOnInit(){
    this.apiService.getCompanies().subscribe(companies => this.companies = companies)
  }
}
