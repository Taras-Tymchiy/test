// @flow
import { handleAction, Action, ActionFunctions, ActionFunction0, Reducer } from "redux-actions";
import createReducer from './utils/createReducer';
import * as settingsActions from '../actions/SettingsActions';
import { type SettingsAction } from "../actions/SettingsActions";
import { type SettingsState } from "./StateTypes";

const initialState: SettingsState = {
  postsCount: 10,
  pullInterval: 5000,
  postsUrl: 'https://api.massrelevance.com/MassRelDemo/kindle.json'
};

export default function settingsReducer(state: SettingsState = initialState, action: SettingsAction): SettingsState {
  switch(action.type) {
    case 'SETTINGS_UPDATE_INTERVAL': return { ...state,
      pullInterval: Math.max(action.interval, 1000)
    };
    case 'SETTINGS_UPDATE_URL': return { ...state,
      postsUrl: action.url
    };
    case 'SETTINGS_UPDATE_COUNT': return { ...state,
      postsCount: Math.max(action.count, 0)
    };
    default: return state;
  }
};
