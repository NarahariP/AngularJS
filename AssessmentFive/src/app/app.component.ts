import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  signUpForm: FormGroup;
  forbiddenName = ['Test'];

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      projectname: new FormControl(null, [
        Validators.required,
        this.forbiddenProjectNameValidator.bind(this),
      ]),
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        this.asyncEmailValidator
      ),
      status: new FormControl('critical'),
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }

  forbiddenProjectNameValidator(
    control: FormControl
  ): { [s: string]: boolean } {
    if (this.forbiddenName.indexOf(control.value) !== -1) {
      return { forbiddenName: true };
    }
  }

  asyncEmailValidator(controller: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (controller.value === 'test@test.com') {
          resolve({ emailForbidden: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
}
