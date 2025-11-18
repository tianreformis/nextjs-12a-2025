import {User} from './types.user';


export const users: User[] = [
    {
        id: 1,
        username: 'tianreformis',
        email: 'r6MfS@example.com',
        password: 'password123'
    },
    {
        id: 2,
        username: 'wira',
        email: 'wirasacalay@gmail.com',
        password: 'wira2024'
    },
]

export function loginUser (username : string, password : string): User | null {