import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post = {
    name: "", 
    text: "",
    avatar:""};

    addPost (newPost : any){
      this.post.name = newPost.name
      this.post.text = newPost.text
      this.post.avatar = newPost.avatar
    }
}
