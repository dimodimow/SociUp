import BaseEntity from "./BaseEntity";

export default class UserEntity extends BaseEntity {
  private _firstName: string;
  private _lastName: string;
  private _username: string;
  private _email: string;
  private _age: number;

  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }

  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }
}