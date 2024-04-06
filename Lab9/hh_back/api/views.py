from django.shortcuts import render
from api.serializers import CompanySerializer, VacancySerializer
from api.models import Company, Vacancy
from django.http.response import JsonResponse
# Create your views here.

def companies(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return JsonResponse(serializer.data, safe=False)

def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error' : str(e)}, status = 400)
    
    serializer = CompanySerializer(company)
    return JsonResponse(serializer.data, safe=False)

def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error' : str(e)}, status = 400)
    
    vacancies = company.companies.all()
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)
