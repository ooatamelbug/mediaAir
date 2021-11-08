import { Document } from 'mongoose';
import {
  MediaInterface,
  ActivitesInterface,
  EducationsInterface,
} from "./otherInterface";

// create interface for user model
export interface UserMedelInterface extends Document {
  _id?: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  active: boolean;
  status: boolean;
  educations?: Array<EducationsInterface>;
  phone?: string;
  email?: string;
  media?: Array<MediaInterface>;
  activites: Array<ActivitesInterface>;
}
