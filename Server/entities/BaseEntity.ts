import { prop, Ref } from "@typegoose/typegoose";
import { UserEntity } from "./UserEntity.js";

export default class BaseEntity {
  // @prop({ ref: () => UserEntity, required: true })
  // createdBy: UserEntity;
  @prop({ required: true })
  createdAt: Date;
  @prop()
  updatedAt: Date;
  // @prop({ ref: () => UserEntity })
  // updatedBy: Ref<UserEntity>;
}
