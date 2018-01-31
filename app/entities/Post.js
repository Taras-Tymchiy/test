// @flows
import { User } from './User';

export type Post {
    id: number;
    id_str: string;
    created_at: string;
    user: User;
    text: string;
}