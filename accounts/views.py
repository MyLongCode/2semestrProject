from django.contrib.auth.decorators import login_required
from rest_framework.response import Response
from rest_framework.views import APIView

from .forms import *
from .serializers import *
from rest_framework import generics, status, permissions

from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse_lazy
from django.views.generic import CreateView

from django.contrib.auth.views import LoginView
from django.contrib.auth import authenticate, login, logout


class SignUpView(CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy('homepage')
    template_name = 'accounts/register.html'

    # Set user Group on registration
    def post(self, request, *args, **kwargs):
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.save()

            # One user Group
            # user_group = Group.objects.get(name=form.cleaned_data['groups'])
            # user.groups.add(user_group)

            # Multiple user Groups
            # for form_ug in form.cleaned_data['groups']:
            #     user_group = Group.objects.get(name=form_ug.name)
            #     user.groups.add(user_group)

            # logout previouse user
            logout(request)

            # Authenticate and login user after registration
            new_user = authenticate(username=form.cleaned_data['username'],
                                    password=form.cleaned_data['password1'],
                                    )
            login(request, new_user)

            return redirect('login')
        else:
            return render(request, self.template_name, {'form' : form })


@login_required
def user_info(request):
    current_user = request.user

    if request.method == 'POST':
        user_form = UserUpdateForm(request.POST, instance=request.user)
        if user_form.is_valid():
            user_form.save()
            return render(request, 'accounts/info.html', {'user_form': user_form})
    else:
        user_form = UserUpdateForm(instance=request.user)

    return render(request, 'accounts/info.html', {'user_form': user_form})


class LoginView(LoginView):
    template_name = 'accounts/login.html'

    def get(self, request, *args, **kwargs):
        if self.request.user.is_authenticated:
            return redirect('info')
        return self.render_to_response(self.get_context_data())


def logout_user(request):
    logout(request)
    return redirect('login')


class ProfileListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User
    serializer_class = UserSerializer


class FollowersListCreate(generics.ListCreateAPIView):
    queryset = Followers.objects.all()
    serializer_class = FollowersSerializer


class FollowersDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Followers
    serializer_class = FollowersSerializer
