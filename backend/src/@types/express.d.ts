declare namespace Express {
    interface UserTypes {
        id: string;
    }

    export interface Request {
        user: UserTypes
    }
}
