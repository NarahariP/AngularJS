import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './model/post.model';

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
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    });
    this.fetchPost();
  }

  onSubmit() {
    console.log(this.form.value);
    this.httpClient
      .post<{ name: string }>(
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
      .get<{ [key: string]: Post }>(
        'https://mytestproject-b6359.firebaseio.com/posts.json'
      )
      .pipe(
        map((responseData) => {
          const arrayPost: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
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
