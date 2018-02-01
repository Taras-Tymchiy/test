import postsReducer from '../postsReducer';
import * as postActions from '../../actions/PostActions';
import { posts } from '../../../../jest/testData';

const initialState = {
  data: [],
  dataLoaded: false,
  isPulling: false,
  isLoading: false,
  error: null
};

it('should return the initial state', () => {
  expect(postsReducer(undefined, {})).toEqual(initialState)
});

it('should handle start sync', () => {
  expect(postsReducer(initialState, postActions.startSync({}, 1))).toEqual({
    ...initialState,
    isPulling: true
  });
});

it('should handle stop sync', () => {
  expect(postsReducer({ ...initialState, isPulling: true}, postActions.stopSync())).toEqual({
    ...initialState,
    isPulling: false
  });
});

it('should handle posts load', () => {
  expect(postsReducer(initialState, postActions.loadPosts({}))).toEqual({
    ...initialState,
    isLoading: true
  });
});

it('should handle posts load success', () => {
  expect(postsReducer({...initialState, isLoading: false }, postActions.loadPostsSuccess(posts))).toEqual({
    ...initialState,
    isLoading: false,
    data: posts
  });
});

it('should handle posts load fail', () => {
  const error = new Error();
  expect(postsReducer({...initialState, isLoading: true, data: posts }, postActions.loadPostsFail(error))).toEqual({
    ...initialState,
    error,
    data: [],
    isLoading: false
  });
});
