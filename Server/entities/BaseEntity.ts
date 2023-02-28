import { prop } from "@typegoose/typegoose";

export default class BaseEntity {
  @prop()
  createdAt: Date;
  @prop()
  updatedAt: Date;
}