# Generated by Django 4.2.1 on 2023-06-07 07:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0003_playlist_playlisttouser'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='playlisttouser',
            name='list_id',
        ),
        migrations.AddField(
            model_name='playlisttouser',
            name='list_id',
            field=models.ManyToManyField(default=0, to='music.playlist'),
        ),
    ]
