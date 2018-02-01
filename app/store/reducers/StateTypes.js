// @flow
import { type Post } from '../../entities/Post';

export type SettingsState = {
    +syncInterval: number;
    +postsUrl: string;
    +postsCount: number;
}  

export type PostsState = {
    +data: Post[],
    +syncInProgess: boolean;
    +isLoading: boolean;
    +error: Error | null;
}

export type RootState = {
    posts: PostsState;
    settings: SettingsState;
    navigation: any;
}