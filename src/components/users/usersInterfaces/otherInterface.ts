import { Document } from 'mongoose';
// create interface for media account
export interface MediaInterface extends Document{
    _id?: string;

}

interface HobbiesInterface extends Document {
    _id?: string;
    title: string;
    date: string;
}

interface InterestInterface extends Document {
    _id?: string;
    title: string;
    place?: Array<string>;
    date: string;
}

interface BooksInterface extends Document {
    _id?: string;
    title: string;
    date: string;
}

export interface EducationParamInterface extends Document {
    name: string;
    date: Date;
    place?: string;
}

export interface EducationsInterface extends Document {
    elmantrySchool: EducationParamInterface
    scondarySchool: EducationParamInterface
    highSchool: EducationParamInterface
}

export interface EducationsCollageInterface extends Document {
    _id?: string;
    title: string;
    place: string;
    degree: string;
    collageName: string;
    date: Date;
}

export interface ActivitesInterface extends Document {
    _id? : string;
    hobbies: Array<HobbiesInterface>;
    interest: Array<InterestInterface>;
    Books: Array<BooksInterface>;
}