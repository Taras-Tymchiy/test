import settingsReducer from '../settingsReducer';
import * as settingsActions from '../../actions/SettingsActions';
import { posts } from '../../../../jest/testData';

const initialState = {
  postsCount: 10,
  syncInterval: 5000,
  postsUrl: 'https://api.massrelevance.com/MassRelDemo/kindle.json'
};

it('should return the initial state', () => {
  expect(settingsReducer(undefined, {})).toEqual(initialState)
});

it('should handle update interval', () => {
  expect(settingsReducer(initialState, settingsActions.updateInterval(33333))).toEqual({
    ...initialState,
    syncInterval: 33333
  });
});

it('doesnt allow interval less than 1000', () => {
  expect(settingsReducer(initialState, settingsActions.updateInterval(1))).toEqual({
    ...initialState,
    syncInterval: 1000
  });
});

it('should handle update count', () => {
  expect(settingsReducer(initialState, settingsActions.updatePostsCount(1))).toEqual({
    ...initialState,
    postsCount: 1
  });
});

it('should handle update url', () => {
  expect(settingsReducer(initialState, settingsActions.updateUrl('updated'))).toEqual({
    ...initialState,
    postsUrl: 'updated'
  });
});
