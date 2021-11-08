import { Document } from 'mongoose';
// create interface for media account
export interface MediaInterface {
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

export interface EducationsInterface extends Document {
    _id?: string;
    title: string;
    place: string;
    date: Date;
}

export interface ActivitesInterface extends Document {
    _id? : string;
    hobbies: Array<HobbiesInterface>;
    interest: Array<InterestInterface>;
    Books: Array<BooksInterface>;
}