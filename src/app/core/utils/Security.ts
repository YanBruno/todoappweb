import { User } from "../models/user.model";

export class Security {
    public static set(user: User, token: string) {
        const data = JSON.stringify(user);

        localStorage.setItem('todouser', data);
        localStorage.setItem('todotoken', token);
    }

    public static setUser(user: User) {
        const data = JSON.stringify(user);
        localStorage.setItem('todouser', data);
    }

    public static setToken(token: string) {
        localStorage.setItem('todotoken', token);
    }

    public static getUser(): User | null {
        const data = localStorage.getItem('todouser');
        if (data) {
            return JSON.parse(data);
        } else {
            return null;
        }
    }

    public static getToken(): string | null {
        const data = localStorage.getItem('todotoken');
        if (data) {
            return data;
        } else {
            return null;
        }
    }

    public static hasToken(): boolean {
        if (this.getToken())
            return true;
        else
            return false;
    }

    public static clear() {
        localStorage.removeItem('todouser');
        localStorage.removeItem('todotoken');
    }
}