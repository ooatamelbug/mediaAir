// import from mongoose and otherInterface
import { Document } from 'mongoose';
import {
  MediaInterface,
  ActivitesInterface,
  EducationsInterface,
  EducationsCollageInterface
} from "./otherInterface";

// create interface for user model
export interface UserMedelInterface extends Document {
  _id?: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  active: boolean;
  imageProfile: string;
  status: boolean;
  educations?: EducationsInterface;
  collages?: Array<EducationsCollageInterface>;
  phone?: string;
  email?: string;
  media?: Array<MediaInterface>;
  activites: Array<ActivitesInterface>;
}

export interface ParamInterface {
  skip?: number;
  limit?: number;
  sort?: number;
}