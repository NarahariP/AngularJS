import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  defaultQuestion = 'pet';
  answer = '';
  @ViewChild('f') signUpForm: NgForm;
  genders = ['Male', 'Female'];
  priview: boolean = false;
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    secretQuestionAnswer: '',
    gender: '',
  };
  /*onSubmit(form: NgForm) {
    console.log(form);
  }
  Then form must be like as below
  <form (ngSubmit)="onSubmit(f)" #f="ngForm">
  */

  onSuggestedName() {
    /*this.signUpForm.setValue({
      userData: {
        username: 'Hari',
        email: '',
      },
      secret: 'pet',
      answer: '',
      gender: 'Male',
    }); 
    this functionality will override the entire form data and need declare all the form fileds
    */
    this.signUpForm.form.patchValue({
      userData: {
        username: 'Hari',
      },
    });
    //This method will update the particulat filed
  }

  onSubmit() {
    this.priview = !this.priview;
    this.user.username = this.signUpForm.value.userData.email;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.secretQuestionAnswer = this.signUpForm.value.answer;
    this.user.gender = this.signUpForm.value.gender;
    //this.signUpForm.reset(); - this is used to reset the form, that inlcude state of the fileds
  }
}
