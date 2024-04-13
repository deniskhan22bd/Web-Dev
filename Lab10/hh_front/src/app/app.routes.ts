import { Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

export const routes: Routes = [
    {path : 'companies', component: CompaniesComponent, title: 'Companies'},
    {path : 'companies/:id/vacancies', component: CompanyDetailComponent, title: 'Company vacancies'}
];
