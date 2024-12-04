from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, NoteSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Note


# create your view here for register :
class CreateUserView(generics.CreateAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  permission_classes = [AllowAny]
  
  
  
# its a create view  for register user
class NoteListCreate(generics.ListCreateAPIView):
  serializer_class = NoteSerializer
  permission_classes = [IsAuthenticated]
  
    
    # this query set for read the data only ofter athenticated
  def get_queryset(self):
    
    user = self.request.user
    return Note.objects.filter(author = user)
    
    # this queryset is for modify and save the data.
  def perform_create(self, serializer):
    
    if serializer.is_valid():
      
      serializer.save(author=self.request.user)
      
    else:
     print(serializer.errors)
     
# for delete query :
class NoteDelete(generics.DestroyAPIView):
  serializer_class = NoteSerializer
  permission_classes  = [IsAuthenticated]
  
  def get_queryset(self):
     user = self.request.user
     return Note.objects.filter(author = user)
   
   
   
   # View for fetching a single note by ID
class NoteDetail(generics.RetrieveAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)