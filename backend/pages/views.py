from django.http import JsonResponse
from pages.models import Homepage
from pages.serializers import HomepageSerializer


def home(request):
    home = Homepage.objects.first()
    serializer = HomepageSerializer(home, context={"request": request})

    return JsonResponse(serializer.data, safe=False)
