import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component  {

  @Input() input_string: string = "";
   strings_for_split: string[] = []
  nums: number[] = []
  diff: number = 0


  difference()  {
     if(this.input_string != "") {
       console.log(this.input_string);
       this.strings_for_split = this.input_string.split(" ")
       console.log(this.strings_for_split);

       for (let i = 0; i < this.strings_for_split.length; i++) {
         this.nums.push(Number(this.strings_for_split[i]))
       }
       console.log(this.nums)
       let min: number = this.nums[0]
       let max: number = this.nums[0]

       for (let i = 0; i < this.nums.length; i++) {
         if (this.nums[i] < min) {
           min = this.nums[i]
         }
         if (this.nums[i] > max) {
           max = this.nums[i]
         }
       }

       console.log(min)
       console.log(max)

       this.diff = max - min
     }
  }


  // constructor() {
  //   console.log(this.difference())
  // }


}
