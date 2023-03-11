import IBaseEntity from "./interfaces/IBaseEntity";

export default class BaseEntity implements IBaseEntity {
  private _id: string;
  private _createdAt: Date;
  private _modifiedAt: Date;

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  public get modifiedAt(): Date {
    return this._modifiedAt;
  }
  public set modifiedAt(value: Date) {
    this._modifiedAt = value;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }
  public set createdAt(value: Date) {
    this._createdAt = value;
  }
}