import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public topics = ['Angular', 'React', 'Nodejs', 'Firebase']

  public userModel = new User('', 'rohim@gmail.com', 55555555, 'default', 'morning', true)

  public topicHasError = true;

  checkTopicValidity(value: string){
    if(value === 'default'){
      this.topicHasError = false;
    }else {
      this.topicHasError = true;
    }
  }
}
