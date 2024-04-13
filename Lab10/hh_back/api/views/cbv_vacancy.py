from api.models import Vacancy
from api.serializers import VacancyModelSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView


class VacancyListCreateAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancyModelSerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancyModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VacancyDetailAPIView(APIView):
    def get_object(self, id=None):
        try:
            vacancy = Vacancy.objects.get(id=id)
            return vacancy
        except Vacancy.DoesNotExist as e:
            return Response({"error": str(e)})

    def get(self, request, id=None):
        category = self.get_object(id)
        serializer = VacancyModelSerializer(category)
        return Response(serializer.data)

    def put(self, request, id=None):
        category = self.get_object(id)

        serializer = VacancyModelSerializer(
            instance=category,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id=None):
        category = self.get_object(id)

        category.delete()
        return Response({"deleted": True})
