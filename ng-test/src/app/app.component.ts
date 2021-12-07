import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  age: number = 24;
  nums: number[] = [];
  // title = 'ng-test';
  inputHandler(value: string) {

    const usingSplit = value.split(' ');
    let usingObjectAssign = Object.assign([], value);


    for (let i = 0; i < usingObjectAssign.length; i++) {
      setTimeout(
        () => {
          this.nums.push(parseInt(usingObjectAssign[i]))
          this.name = usingObjectAssign[i]
        }, 3000)
    }
    let max: number = Math.max(...this.nums)
    let min: number = Math.min(...this.nums)

    let rez: number = max - min
    this.name = rez.toString()


  }
}
