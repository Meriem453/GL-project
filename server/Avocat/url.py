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
path('user/all',views.getAllAvocats),

#POST REQUESTS
path('user/search',views.searchAllAvocats),
path('user/addComment',views.addComment),
path('user/addRDV',views.addRDV),

#--------------------------------------Avocat URLs---------------------------------------------------------------
#POST REQUESTS
path('avocat/signUp',views.signUp),
path('avocat/login',views.login),

#GET REQUESTS
path('avocat/currentAvocat',views.getCurrentAvocat),
path('avocat/profile',views.getProfileAvocat),
path('avocat/profile/modify',views.modify_profile),


#---------------------------------------------Admin URLs-----------------------------------------------------------

path('admin/updatestatus',views.updateAvocatStatus),
path('admin/getPending',views.getPendingAvocats),
path('admin/delete',views.deleteAvocat),






]