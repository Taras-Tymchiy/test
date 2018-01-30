// @flow

export type UpdateCountAction = { type: 'SETTINGS_UPDATE_COUNT', count: number };
export type UpdateIntervalAction = { type: 'SETTINGS_UPDATE_INTERVAL', interval: number };
export type UpdateUrlAction = { type: 'SETTINGS_UPDATE_URL', url: string };

export type SettingsAction =
  | UpdateCountAction
  | UpdateIntervalAction
  | UpdateUrlAction;

export function updatePostsCount(count: number): UpdateCountAction {
  return { type: 'SETTINGS_UPDATE_COUNT', count };
}
    
export function updateInterval(interval: number): UpdateIntervalAction {
  return { type: 'SETTINGS_UPDATE_INTERVAL', interval };
}
      
export function updateUrl(url: string): UpdateUrlAction {
  return { type: 'SETTINGS_UPDATE_URL', url };
}
