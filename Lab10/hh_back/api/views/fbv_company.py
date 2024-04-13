import json
from api.serializers import CompanySerializer, VacancySerializer
from api.models import Company
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
# Create your views here.

# FBV
@api_view(["GET", "POST"])
def companies(request):
    if request.method == "GET":
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    
    if request.method == "POST":
        data = json.loads(request.body)
        serializer = CompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

@api_view(["GET", "PUT", "DELETE"])
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return Response({'error' : str(e)}, status = status.HTTP_400_BAD_REQUEST)
    
    
    if request.method == "GET":
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    if request.method == "PUT":
        serializer = CompanySerializer(
            instance=company, 
            data=request.data
        )
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    if request.method == "DELETE":
        company.delete()
        return Response({"deteled" : True})
        
        

@api_view(["GET"])
def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return Response({'error' : str(e)}, status = status.HTTP_400_BAD_REQUEST)
    
    vacancies = company.vacancies.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)