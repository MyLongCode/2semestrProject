from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_extended')
    place = models.CharField(max_length=100)
    biography = models.CharField(max_length=200)
    count_followers = models.IntegerField(default=0)
    image_url = models.URLField(blank=True)

    def __str__(self):
        return self.user.name


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()