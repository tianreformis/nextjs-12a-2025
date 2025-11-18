import {User} from './types.user';

//array user namun tipe datanya sudah ditentukan di file yang berbeda
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

//fungsi untuk mencari user berdasarkan array 
export function loginUser (username : string, password : string): User | null {
    const user = users.find((u) => u.username === username && u.password === password);
    return user || null;
}