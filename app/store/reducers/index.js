// @flow

import { combineReducers } from 'redux';
import posts from './postsReducer';
import settings from './settingsReducer';
import navigation from './navigationReducer';

const rootReducer = combineReducers({
    posts,
    settings,
    navigation
});

export default rootReducer;
