from django.core.exceptions import ValidationError
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from .forms import *


def user_register(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            if User.objects.filter(username=username).exists():
                raise ValidationError("Email exists")
            else:
                form.save()
                return redirect('login')
    else:
        form = RegisterForm()
    return render(request, 'accounts/register.html', {'form': form})


def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            user = authenticate(username=cd['username'], password=cd['password'])
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return redirect('info')
                else:
                    return HttpResponse('Disabled account')
            else:
                return HttpResponse('Invalid login')
    else:
        form = LoginForm()
    return render(request, 'accounts/login.html', {'form': form})


@login_required
def user_info(request):
    current_user = request.user

    if request.method == 'POST':
        image_form = ImageForm(request.POST, request.FILES)
        profile_form = ProfileUpdateForm(request.POST, instance=request.user.profile)
        user_form = UserUpdateForm(request.POST, instance=request.user)
        if profile_form.is_valid() and user_form.is_valid() and image_form.is_valid():
            image_form.save()
            profile_form.save()
            user_form.save()
            img_obj = image_form.instance
            return render(request, 'accounts/info.html', {'profile_form': profile_form,
                                                          'user_form': user_form,
                                                          'image_form': image_form,
                                                          'img_obj': img_obj})
    else:
        profile_form = ProfileUpdateForm(instance=request.user.profile)
        user_form = UserUpdateForm(instance=request.user)
        image_form = ImageForm()

    return render(request, 'accounts/info.html',  {'profile_form': profile_form,
                                                   'user_form': user_form,
                                                   'image_form': image_form})


def logout_user(request):
    logout(request)
    return redirect('login')