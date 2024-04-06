from django.urls import path
from api.views import companies, company_detail, company_vacancies
urlpatterns = [
    path('companies/', companies),
    path('companies/<int:id>', company_detail),
    path('companies/<int:id>/vacancies/', company_vacancies)
]