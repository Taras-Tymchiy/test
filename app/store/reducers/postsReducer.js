// @flow
import { Post } from "../../entities/Post";
import { handleAction, Action, ActionFunctions, ActionFunction0, Reducer } from "redux-actions";
import createReducer from './utils/createReducer';
import * as postActions from '../actions/PostActions';
import { type PostsAction } from "../actions/PostActions";
import { type PostsState } from "./StateTypes";

const initialState: PostsState = {
    data: [],
    dataLoaded: false,
    syncInProgess: false,
    isLoading: false,
    error: null
};

export default function postsReducer(state: PostsState = initialState, action: PostsAction): PostsState {
  switch(action.type) {
    case 'POSTS_START_SYNC': return { ...state,
      syncInProgess: true
    };
    case 'POSTS_STOP_SYNC': return { ...state,
      syncInProgess: false
    };
    case 'POSTS_LOAD': return { ...state, 
      isLoading: true 
    };
    case 'POSTS_LOAD_SUCCESS': return { ...state, 
      isLoading: false,
      data: action.posts,
      error: null
    };
    case 'POSTS_LOAD_FAIL': return { ...state, 
      isLoading: false,
      error: action.error,
      data: []
    };
    default: return state;
  }
};