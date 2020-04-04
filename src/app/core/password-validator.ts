import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
    // One uppercase at least
    const passwordRegex = RegExp('(?=.*[A-Z])');
    const valid = passwordRegex.test(control.value);

    const errors = {
        password: {
            rules: 'must contain a capital letter'
        }
    };

    return !valid ? errors : null;
}
