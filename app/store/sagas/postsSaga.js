// @flow
import { Action } from 'redux-actions';
import { call, put, take, takeEvery, fork, cancel, cancelled } from 'redux-saga/effects';
import type {
  IOEffect
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as postActions from '../actions/PostActions';
import { QueryParams } from '../../api/types/QueryParams';
import { getItems } from '../../api/api';
import { type LoadPostsAction, type StartSyncPostsAction } from '../actions/PostActions';


export function* loadPosts(queryParams: QueryParams): Generator<IOEffect, *, *> {
  try {
    yield put(postActions.loadPosts(queryParams));
    const posts = yield call(getItems, queryParams);
    yield put(postActions.loadPostsSuccess(posts));
  } catch(e) {
    yield put(postActions.loadPostsFail(e));
  } finally {
    if (yield cancelled()) {
      yield put(postActions.loadPostsCancelled());
    }
  }
}

export function* startSync({interval, queryParams}: StartSyncPostsAction): Generator<IOEffect, *, *> {
  while (true) {
    yield fork(loadPosts, queryParams);
    yield take(['POSTS_LOAD_SUCCESS', 'POSTS_LOAD_FAIL']);
    yield delay(interval);
  }
  return;
}

export default function* postsSaga(): Generator<IOEffect, *, *> {
  let action: StartSyncPostsAction;
  while (action = yield take('POSTS_START_SYNC')) {
    const task = yield fork(startSync, action);
    yield take('POSTS_STOP_SYNC');
    yield cancel(task);
  }
}
