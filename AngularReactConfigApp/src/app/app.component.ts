import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddenUserNames = ['Hari', 'Test']; //custom validator

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNamesValidator.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmailValidator
        ),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });

    /** These two hooks to very useful to valdiate/identity value and status chanegs in form */
    this.signUpForm.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.signUpForm.statusChanges.subscribe((status) => {
      console.log(status);
    });
    /** Hooks end */
    /** The below methods are used to setValue/ patchValue- completly or partially */
    this.signUpForm.setValue({
      userData: {
        username: 'Test Setting',
        email: 'test@email.com',
      },
      gender: 'male',
      hobbies: [],
    });

    this.signUpForm.patchValue({
      userData: {
        username: 'Hari Test',
      },
    });
    /** Based on requirment we can use the any one method*/
  }

  onSubmit() {
    console.log(this.signUpForm);
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  get controls() {
    return (this.signUpForm.get('hobbies') as FormArray).controls;
  }

  /** Custom Validator */
  forbiddenNamesValidator(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  /** Async Validation by intaracting with server */
  forbiddenEmailValidator(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailForbidden: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
}
