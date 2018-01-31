import { Post } from "../app/entities/Post";


export const posts: Post[] = [
    {
        id: 1,
        id_str: '1',
        created_at: '2015-01-01',
        user: {
            id: 1,
            name: 'John Snow',
        },
        text: 'post text 1'
    },
    {
        id: 2,
        id_str: '2',
        created_at: '2015-01-02',
        user: {
            id: 2,
            name: 'Barack Obama',
        },
        text: 'post text 2'
    }
]