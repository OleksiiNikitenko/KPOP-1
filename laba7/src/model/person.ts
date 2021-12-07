export class Person{
  private _id!: number;
  private _name!: string;
  private _email!: string;
  private _password!: string;
  private _confirm_password!: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get confirm_password(): string {
    return this._confirm_password;
  }

  set confirm_password(value: string) {
    this._confirm_password = value;
  }
}

