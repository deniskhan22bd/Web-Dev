import { Component } from '@angular/core';
import { Company, Vacancy } from '../models';
import { ApiService } from '../api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent {
  company !: Company
  vacancies !: Vacancy[]

  constructor(
    private route : ActivatedRoute,
    private apiService: ApiService,
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if(params.get('id')){
        const id = Number(params.get('id'));
        this.apiService.getVacanciesByCompany(id).subscribe(vacancies => this.vacancies = vacancies)
        this.apiService.getCompany(id).subscribe(company => this.company = company)
      }
    })
  }
}
