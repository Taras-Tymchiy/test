import * as settingsActions from '../SettingsActions';

it('settings action creators create right actions', () => {
  expect(settingsActions.updateInterval(1)).toEqual({
    type: 'SETTINGS_UPDATE_INTERVAL',
    interval: 1
  });
  expect(settingsActions.updatePostsCount(22)).toEqual({
    type: 'SETTINGS_UPDATE_COUNT',
    count: 22
  });
  expect(settingsActions.updateUrl('test')).toEqual({
    type: 'SETTINGS_UPDATE_URL',
    url: 'test'
  });
});
