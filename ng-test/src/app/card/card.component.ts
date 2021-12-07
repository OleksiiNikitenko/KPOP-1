import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
  interpolation: ['{{', '}}']
})

export class CardComponent implements OnInit{

  title = "LABRAB#3";
  text = "Task3.8";
  name = ""


  // number = 20;
  // array = [1, 1, 2, 3, 5, 8, 11]
  // obj = {
  //   name: "Oleksii",
  //   info: {age: 20,
  //          job: "backend"}
  // }
  // imgUrl = 'https://img.favpng.com/19/25/8/java-programming-language-programmer-computer-programming-logo-png-favpng-fhppYS113xSPzB7babpSMhrfP.jpg'
  // disabled = false
  ngOnInit() {
    // setTimeout(
    //   () => {
    //     this.imgUrl = 'https://ih1.redbubble.net/image.806255638.2478/flat,128x,075,f-pad,128x128,f8f8f8.u4.jpg',
    //       this.disabled = true
    //   }, 3000)
  }
  // getInfo() {
  //   return "my info"
  // }

  imageUrl = "https://img.favpng.com/19/25/8/java-programming-language-programmer-computer-programming-logo-png-favpng-fhppYS113xSPzB7babpSMhrfP.jpg"

  cleanName(){
    this.name = ""
    this.imageUrl = ""
  }

  inputHandler(value: string){ // event: any
    //const value = event.target.value
    this.name = value
    this.imageUrl = value
  }
}
