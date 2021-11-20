
interface userData {
    _id?: string;
    username?: string;
    firstName: string;
    lastName: string;
    image: string;
}

export interface ResponseInterface {
    success?: boolean;
    message?: string;
    token?: string;
    userData?: userData;
    data?: Array<any>;
}

export interface ReturnInterface {
    response: ResponseInterface;
    statusCode: number;
}