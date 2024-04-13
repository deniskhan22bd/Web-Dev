import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company, Vacancy } from './models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private client : HttpClient) { }

  getCompanies() : Observable<Company[]>{
    return this.client.get<Company[]>("http://127.0.0.1:8000/api/companies/")
  }

  createCompany(company : Company) : Observable<Company>{
    return this.client.post<Company>("http://127.0.0.1:8000/api/companies/", company)
  }

  getCompany(id : number) : Observable<Company>{
    return this.client.get<Company>(`http://127.0.0.1:8000/api/companies/${id}/`)
  }

  updateCompany(id: number, company : Company) : Observable<Company>{
    return this.client.put<Company>(`http://127.0.0.1:8000/api/companies/${id}/`, company)
  }

  deleteCompany(id: number): Observable<void> {
    return this.client.delete<void>(`http://127.0.0.1:8000/api/companies/${id}/`);
  }

  getVacanciesByCompany(id: Number): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`http://127.0.0.1:8000/api/companies/${id}/vacancies`);
  }

  getVacancies(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>("http://127.0.0.1:8000/api/vacancies/");
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.client.get<Vacancy>(`http://127.0.0.1:8000/api/vacancies/${id}/`);
  }

  postVacancy(vacancyData: Vacancy): Observable<Vacancy> {
    return this.client.post<Vacancy>("http://127.0.0.1:8000/api/vacancies/", vacancyData);
  }

  putVacancy(id: number, vacancyData: Vacancy): Observable<Vacancy> {
    return this.client.put<Vacancy>(`http://127.0.0.1:8000/api/vacancies/${id}/`, vacancyData);
  }

  deleteVacancy(id: number): Observable<void> {
    return this.client.delete<void>(`http://127.0.0.1:8000/api/vacancies/${id}/`);
  }
}
