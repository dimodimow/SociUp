import BaseEntity from "./BaseEntity.js";
import { getModelForClass, prop } from "@typegoose/typegoose";
export class UserEntity extends BaseEntity {
  @prop({ required: true })
  public firstName: string;

  @prop({ required: true })
  public lastName: string;

  @prop({ required: true })
  public age: number;

  @prop({ required: true })
  public email: string;
  
  @prop({ required: true })
  public phoneNumber: string;
}

export const UserModel = getModelForClass(UserEntity);
