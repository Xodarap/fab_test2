from django.shortcuts import render

def home(request):
    return render(request, 'home.html', {})

def ads_landing(request):
    return render(request, 'ads_landing.html', {})