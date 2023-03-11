import { PostType } from "../common/enums/PostType";
import BaseEntity from "./BaseEntity";

export default class PostEntity extends BaseEntity {
  private _contentUrl: string;

  private _description: string;

  private _type: PostType;

  private _userId: string;

  public get contentUrl(): string {
    return this._contentUrl;
  }
  public set contentUrl(value: string) {
    this._contentUrl = value;
  }

  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }

  public get type(): PostType {
    return this._type;
  }
  public set type(value: PostType) {
    this._type = value;
  }

  public get userId(): string {
    return this._userId;
  }
  public set userId(value: string) {
    this._userId = value;
  }
}
