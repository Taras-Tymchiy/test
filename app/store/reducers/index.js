// @flow

import { combineReducers } from 'redux';
import posts, { type PostsState } from './postsReducer';
import settings, { type SettingsState } from './settingsReducer';
import navigation from './navigationReducer';

export type RootState = {
    posts: PostsState;
    settings: SettingsState;
    navigation: any;
}

const rootReducer = combineReducers({
    posts,
    settings,
    navigation
});

export default rootReducer;
