// @flow
// import { createAction } from 'redux-actions';
import { Post } from "../../entities/Post";
import { QueryParams } from '../../api/types/QueryParams';

export type LoadPostsAction = { type: 'POSTS_LOAD', queryParams: QueryParams };
export type LoadPostsSuccessAction = { type: 'POSTS_LOAD_SUCCESS', posts: Post[] };
export type LoadPostsFailAction = { type: 'POSTS_LOAD_FAIL', error: Error };
export type LoadPostsCancelledAction = { type: 'POSTS_LOAD_CANCELLED' };
export type StartSyncPostsAction = { 
    type: 'POSTS_START_SYNC', 
    queryParams: QueryParams,
    interval: number
};
export type StopSyncPostsAction = { type: 'POSTS_STOP_SYNC' };

export type PostsAction =
  | LoadPostsAction
  | LoadPostsSuccessAction
  | LoadPostsFailAction
  | LoadPostsCancelledAction
  | StartSyncPostsAction
  | StopSyncPostsAction;

export function loadPosts(queryParams: QueryParams ): LoadPostsAction {
  return { type: 'POSTS_LOAD', queryParams };
}
    
export function loadPostsSuccess(posts: Post[]): LoadPostsSuccessAction {
  return { type: 'POSTS_LOAD_SUCCESS', posts };
}

export function loadPostsFail(error: Error): LoadPostsFailAction {
  return { type: 'POSTS_LOAD_FAIL', error };
}

export function loadPostsCancelled(): LoadPostsCancelledAction {
  return { type: 'POSTS_LOAD_CANCELLED' };
}

export function startSync(
  queryParams: QueryParams, interval: number
): StartSyncPostsAction {
  return { type: 'POSTS_START_SYNC', queryParams, interval };
}

export function stopSync(): StopSyncPostsAction {
  return { type: 'POSTS_STOP_SYNC' };
}
