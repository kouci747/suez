import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie'; // pour pouvoir utiliser les animations lottie

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent {
  options1: AnimationOptions = {
    path: 'assets/Lotties/developperLottie.json',
  };
  options2: AnimationOptions = {
    path: 'assets/Lotties/mongodbLottie.json',
  };
  options4: AnimationOptions = {
    path: 'assets/Lotties/jsLottie.json',
  };
  options3: AnimationOptions = {
    path: 'assets/Lotties/reactLottie.json',
  };
  options5: AnimationOptions = {
    path: 'assets/Lotties/nodeLottie.json',
  };
  options6: AnimationOptions = {
    path: 'assets/Lotties/expressLottie.json',
  };
  options7: AnimationOptions = {
    path: 'assets/Lotties/angularLottie.json',
  };
}
