// @flow
import { Action } from 'redux-actions';
import { call, put, take, takeEvery, fork, cancel, cancelled } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as postActions from '../actions/PostActions';
import { QueryParams } from '../../api/types/QueryParams';
import { getItems } from '../../api/api';
import { type LoadPostsAction, type StartSyncPostsAction } from '../actions/PostActions';


function* loadPosts(queryParams: QueryParams) {
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

function* startPulling({interval, queryParams}: StartSyncPostsAction) {
  while (true) {
    const task = yield fork(loadPosts, queryParams);
    yield take(['POSTS_LOAD_SUCCESS', 'POSTS_LOAD_FAIL']);
    yield delay(interval);
  }
  return;
}
/* $FlowFixMe */
export default function* postsSaga() {
  let action: StartSyncPostsAction;
  while (action = yield take('POSTS_START_SYNC')) {
    const task = yield fork(startPulling, action);
    yield take('POSTS_STOP_SYNC');
    yield cancel(task);
  }
}
