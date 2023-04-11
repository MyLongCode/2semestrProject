from django.contrib import admin

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from accounts.models import User


# Register your models here.
@admin.register(User)
class CustomUserAdmin(UserAdmin):
    inlines = []

    model = User
    # add_form = CustomUserCreationForm
    # form = CustomUserChangeForm

    list_display = ['username', 'is_staff']

    # Add user
    add_fieldsets = (
        *UserAdmin.add_fieldsets,
        (
            'Custom fields',
            {
                'fields': (
                    'place'
                )
            }
        )
    )

    # Edit user
    fieldsets = (
        *UserAdmin.fieldsets,
        (
            'Custom fields',
            {
                'fields': (
                    'place',
                )
            }
        )
    )

    def user_groups_display(self, user):
        try:
            groups = []
            for group in user.groups.all():
                groups.append(group.name)
            return ', '.join(groups)
        except:
            return '-'
