export interface User {
    id: string;
    name: Name;
    email: Email;
    active: boolean;
    createdAt: Date;
}

export interface Name {
    firstName: string;
    lastName: string;
}

export interface Email {
    address: string;
}