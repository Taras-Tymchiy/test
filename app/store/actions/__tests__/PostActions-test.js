import * as postActions from '../PostActions';
import { posts } from '../../../../jest/testData';

it('post action creators create right actions', () => {
  const queryParams = { url: 'url', count: 1 };
  const error = new Error();
  expect(postActions.loadPosts(queryParams)).toEqual({
    type: 'POSTS_LOAD',
    queryParams
  });
  expect(postActions.loadPostsSuccess(posts)).toEqual({
    type: 'POSTS_LOAD_SUCCESS',
    posts
  });
  expect(postActions.loadPostsFail(error)).toEqual({
    type: 'POSTS_LOAD_FAIL',
    error
  });
  expect(postActions.loadPostsCancelled()).toEqual({
    type: 'POSTS_LOAD_CANCELLED'
  });
  expect(postActions.startSync(queryParams, 111)).toEqual({
    type: 'POSTS_START_SYNC',
    queryParams, 
    interval: 111
  });
  expect(postActions.stopSync()).toEqual({
    type: 'POSTS_STOP_SYNC'
  });
});