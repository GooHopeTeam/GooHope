from django.db import models

from society.models import User


class Friends(models.Model):
    status_choices = (
        ('FAV', 'Favorite'),
        ('NEU', 'Neutral'),
        ('BL', 'Blocked')
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    friend = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.CharField(choices=status_choices)