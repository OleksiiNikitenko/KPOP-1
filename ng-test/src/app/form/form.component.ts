import { Component } from '@angular/core';
import { Input} from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
  @Input() userName: string = "rez";
  @Input() userAge: number = 0;

}
