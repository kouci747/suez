import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-fullstack-intern-developer',
  templateUrl: './fullstack-intern-developer.component.html',
  styleUrls: ['./fullstack-intern-developer.component.css'],
})
// export class FullstackInternDeveloperComponent {}
export class FullstackInternDeveloperComponent {
  options1: AnimationOptions = {
    path: 'assets/Lotties/firebaseLottie.json',
  };

  options2: AnimationOptions = {
    path: 'assets/Lotties/reactFirebaseLottie.json',
  };

  options3: AnimationOptions = {
    path: 'assets/Lotties/reactLottie.json',
  };
  options4: AnimationOptions = {
    path: 'assets/Lotties/laravelLottie.json',
  };
  options5: AnimationOptions = {
    path: 'assets/Lotties/nodeLottie.json',
  };
  options6: AnimationOptions = {
    path: 'assets/Lotties/mongodbLottie.json',
  };
  options7: AnimationOptions = {
    path: 'assets/Lotties/htmlLottie.json',
  };
  // options8: AnimationOptions = {
  //   path: 'assets/Lotties/javascriptLottie.json',
  // };
  options9: AnimationOptions = {
    path: 'assets/Lotties/angularLottie.json',
  };
}
