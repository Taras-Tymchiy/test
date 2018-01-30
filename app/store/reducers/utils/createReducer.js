// @flow

import { Reducer, Action } from "redux-actions";
import { reduceReducers } from "reduce-reducers";

export default function createReducer<State>(initialState: State, ...actionReducers: Reducer<State>[]) {
    const reducer = reduceReducers(...actionReducers);
    return (state: State = initialState, action: Action) => reducer(state, action);
}