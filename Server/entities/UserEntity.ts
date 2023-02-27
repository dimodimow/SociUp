import BaseEntity from './BaseEntity';

export default class UserEntity extends BaseEntity {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phoneNumber: string;
 
  constructor(
     id: string,
     createdAt: Date,
     modifiedAt: Date,
     firstName: string,
     lastName: string,
     age: number,
     email: string,
     phoneNumber: string
  ) {
    super(id, createdAt, modifiedAt);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
};