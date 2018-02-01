import { call, put, take, takeEvery, fork, cancel, cancelled } from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/utils';
import postsSaga, { startSync, loadPosts } from '../postsSaga';
import * as postsActions from '../../actions/PostActions';
import { delay } from 'redux-saga';
import { getItems } from '../../../api/api';
import { posts } from '../../../../jest/testData';

const queryParams = { url: 'test', count: 2 };

it('should listen to start/stop actions in a loop', () => {
  const gen = postsSaga();
  for(let i = 2; i > 0; --i) {
    const startSyncAction = postsActions.startSync({}, 1);
    const stopSyncAction = postsActions.stopSync();
    const forkEffect = fork(startSync, startSyncAction);
    const task = createMockTask();
  
    expect(gen.next().value)               .toEqual(take(startSyncAction.type));
    expect(gen.next(startSyncAction).value).toEqual(forkEffect);
    expect(gen.next(task).value)           .toEqual(take(stopSyncAction.type));
    expect(gen.next().value)               .toEqual(cancel(task));
  }
  gen.next();
  expect(gen.next(false).done).toEqual(true);
});

it('should load posts in a loop', () => {
  const interval = 1;

  const gen = startSync({interval, queryParams});
  
  for(let i = 2; i > 0; --i) {
    const forkEffect = fork(loadPosts, queryParams);
    const loadSuccessAction = postsActions.loadPostsSuccess([]);
    const loadFailAction = postsActions.loadPostsFail();

    expect(gen.next().value).toEqual(forkEffect);
    expect(gen.next().value).toEqual(take([loadSuccessAction.type, loadFailAction.type]));
    gen.next();
  }
});
  

it('should call api and dispatch success action on response', () => {  
  const gen = loadPosts(queryParams);

  expect(gen.next().value)     .toEqual(put(postsActions.loadPosts(queryParams)));
  expect(gen.next().value)     .toEqual(call(getItems, queryParams));
  expect(gen.next(posts).value).toEqual(put(postsActions.loadPostsSuccess(posts)));
});
  
it('should dispatch fail action on error', () => {  
  const gen = loadPosts(queryParams);
  
  const error = new Error();

  gen.next();
  expect(gen.throw(error).value).toEqual(put(postsActions.loadPostsFail(error)));  
});

it('should dispatch cancelled action on cancel', () => {  
  const gen = loadPosts(queryParams);
  
  gen.next();
  gen.throw();
  expect(gen.next().value).toEqual(cancelled());
  expect(gen.next(true).value).toEqual(put(postsActions.loadPostsCancelled()));
  
});

it('should not dispatch cancelled action if not cancelled', () => {  
  const gen = loadPosts(queryParams);
  
  gen.next();
  gen.throw();
  expect(gen.next().value).toEqual(cancelled());
  expect(gen.next(false).done).toEqual(true);
  
});
