# Generated by Django 4.2.1 on 2023-06-07 07:27

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('music', '0002_music_tags'),
    ]

    operations = [
        migrations.CreateModel(
            name='PlayList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('is_private', models.BooleanField(default=True)),
                ('create_time', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='PlayListToUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('list_id', models.IntegerField(default=0)),
                ('music', models.ManyToManyField(to='music.music')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
