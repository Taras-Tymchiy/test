// @flow
// import { createAction } from 'redux-actions';
import { Post } from "../../entities/Post";
import { QueryParams } from '../../api/types/QueryParams';

export type LoadPostsAction = { type: 'POSTS_LOAD', queryParams: QueryParams };
export type LoadPostsSuccessAction = { type: 'POSTS_LOAD_SUCCESS', posts: Post[] };
export type LoadPostsFailAction = { type: 'POSTS_LOAD_FAIL', error: Error };
export type LoadPostsCancelledAction = { type: 'POSTS_LOAD_CANCELLED' };
export type StartPullingPostsAction = { 
    type: 'POSTS_START_PULLING', 
    queryParams: QueryParams,
    interval: number
};
export type StopPullingPostsAction = { type: 'POSTS_STOP_PULLING' };

export type PostsAction =
  | LoadPostsAction
  | LoadPostsSuccessAction
  | LoadPostsFailAction
  | LoadPostsCancelledAction
  | StartPullingPostsAction
  | StopPullingPostsAction;

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

export function startPullingPosts(
  queryParams: QueryParams, interval: number
): StartPullingPostsAction {
  return { type: 'POSTS_START_PULLING', queryParams, interval };
}

export function stopPullingPosts(): StopPullingPostsAction {
  return { type: 'POSTS_STOP_PULLING' };
}

// we could define the above actions by the following 3 lines of code
// but, unfortenately, flow appears to fail processing such generic function calls.
// I would consider using typescript instead of flow

// export const loadPosts = createAction<QueryParams>('[Posts] load list success');
// export const loadPostsSuccess = createAction<Post[]>('[Posts] load list success');
// export const loadPostsFail = createAction<Error>('[Posts] load list fail');
