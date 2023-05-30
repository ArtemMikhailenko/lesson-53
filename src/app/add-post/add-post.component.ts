import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent { 

  @Output() onPost = new EventEmitter();

  nameInputValue = '';
  textInputValue = '';
  avatarInputValue = '';

  onName(event: any){
    this.nameInputValue = event.target.value;
  }

  onAvatar(event: any){
    this.avatarInputValue = event.target.value;
  }
  onText(event: any){
    this.textInputValue = event.target.value;
  }
  addNewPost(nameValue: string, textValue: string, avatarValue: string ) {
    const value = {
      name: nameValue,
      text: textValue,
      avatar: avatarValue,
    }
    this.onPost.emit(value)
    this.nameInputValue = '';
    this.textInputValue = '';
    this.avatarInputValue = '';
  }
  deletePost(nameValue: string, textValue: string, avatarValue: string ) {
    const value = {
      name: '',
      text: '',
      avatar: '',
    }
    this.onPost.emit(value)
    this.nameInputValue = '';
    this.textInputValue = '';
    this.avatarInputValue = '';
  }

}
