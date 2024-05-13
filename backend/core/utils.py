from django.contrib.auth import password_validation


def validate_change_passwords(user, old_password, new_password, confirm_password):
    if user.check_password(raw_password=old_password):
        if new_password == confirm_password:
            return True, None
        else:
            return False, f'Passwords do not matched. Please try again'
    else:
        return False, f'You entered wrong password, please try again'

