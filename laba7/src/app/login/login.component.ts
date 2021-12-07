import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Person} from "../../model/person";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  registerForm: FormGroup | any;

  public persons: Person[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required,
        Validators.email],
      ),
      'password': new FormControl(null,
        [Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')])
    });
    this.registerForm = new FormGroup({
      'email': new FormControl(null, [Validators.required,
        Validators.email],
      ),
      'password': new FormControl(null,
        [Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')]),
      'name': new FormControl(null, [Validators.required,
        Validators.pattern('^[a-zA-Z0-9 ]{3,255}$')]
      ),
      'confirm_password': new FormControl(null, [Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')]
      )
    });
    this.getAllPersons()
  }

  public login(): void {
    console.log(this.loginForm.value)
    this.loginForm.reset();
  }


  public register(): void {
    let person: Person = this.loginForm.value
    console.log(this.registerForm.value)
    this.registerForm.reset();
    this.persons?.push(person)
  }

  getAllPersons(): Person[] | undefined {
    return this.persons
  }


}
