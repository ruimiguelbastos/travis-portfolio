from django.http import JsonResponse
from projects.models import Project
from projects.serializers import ProjectSerializer
from operator import itemgetter


def project_index(request):
    category = request.GET.get("category", None)
    offset = int(request.GET.get("offset", 0))
    limit = int(request.GET.get("limit", 4))

    if category is None or category not in list(
        map(itemgetter(0), Project.Category.choices)
    ):
        projects = Project.objects.all()
    else:
        projects = Project.objects.filter(category=category)

    serializer = ProjectSerializer(
        projects[offset:limit], context={"request": request}, many=True
    )

    return JsonResponse(serializer.data, safe=False)


def project_detail(request, pk):
    project = Project.objects.get(pk=pk)
    serializer = ProjectSerializer(project, context={"request": request})

    return JsonResponse(serializer.data, safe=False)
