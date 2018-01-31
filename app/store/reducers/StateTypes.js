// @flow
import { type Post } from '../../entities/Post';

export type SettingsState = {
    +pullInterval: number;
    +postsUrl: string;
    +postsCount: number;
}  

export type PostsState = {
    +data: Post[],
    +isPulling: boolean;
    +isLoading: boolean;
    +error: Error | null;
}

export type RootState = {
    posts: PostsState;
    settings: SettingsState;
    navigation: any;
}