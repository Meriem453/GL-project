from django.contrib import admin
from .models import Avocat
from .models import Wilaya
from .models import Speciality
from .models import RateAndComments
from .models import Day
from .models import Admin
from .models import RDV


# Register your models here.


admin.site.register(Avocat)
admin.site.register(Wilaya)
admin.site.register(Speciality)
admin.site.register(Day)
admin.site.register(RateAndComments)
admin.site.register(Admin)
admin.site.register(RDV)


