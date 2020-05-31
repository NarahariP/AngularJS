import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null),
      content: new FormControl(null),
    });
    this.fetchPost();
  }

  onSubmit() {
    console.log(this.form.value);
    this.httpClient
      .post(
        'https://mytestproject-b6359.firebaseio.com/posts.json',
        this.form.value
      )
      .subscribe((responseDate) => {
        console.log(responseDate);
      });
  }

  onFetchPost() {
    this.fetchPost();
  }

  private fetchPost() {
    this.httpClient
      .get('https://mytestproject-b6359.firebaseio.com/posts.json')
      .pipe(
        map((responseData) => {
          const arrayPost = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              console.log(key);
              arrayPost.push({ ...responseData[key], id: key });
            }
          }
          return arrayPost;
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
