from django.urls import path
from . import views
urlpatterns=[
#path('',views.index),

#--------------------------------------------User URLs-----------------------------------------------------------------------

#GET REQUESTS
path('user/allAvocats',views.getActiveAvocats),
path('user/allComments/<int:avocat_id>',views.getCommentsOfAvocat),
path('user/avocatInfo/<int:avocat_id>',views.getAvocatInfo),
path('user/allWilayas',views.getAllWilayas),
path('user/allSpec',views.getAllSpecialities),
path('user/planOfAvocat/<int:avocat_id>',views.getPlanOfAvocat),
#POST REQUESTS
path('user/search',views.searchAllAvocats),
path('user/addComment',views.addComment),




]