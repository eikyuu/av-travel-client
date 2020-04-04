import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {

  // One uppercase at least
    const emailRegex = RegExp('(^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$)');
    const valid = emailRegex.test(control.value);

    const errors = {
        email: {
            rules: 'email valide need'
        }
    };

    return !valid ? errors : null;
}
