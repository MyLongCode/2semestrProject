import os

import magic
from django.core.exceptions import ValidationError


def validate_is_music(file):
    allowed_filetypes = ['audio']
    validator = magic.Magic(uncompress=True, mime=True)
    file_type = validator.from_buffer(file.read()).split('/')[0]
    if file_type not in allowed_filetypes and file_type != '':
        raise ValidationError(file_type)