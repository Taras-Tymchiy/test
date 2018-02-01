// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as settingsActions from '../../../store/actions/SettingsActions';
import { type RootState } from '../../../store/reducers/StateTypes';
import SettingsView from './SettingsView';

interface SettingsScreenProps {
  +syncInterval: number;
  +postsCount: number;
  +postsUrl: string;
  +actions: typeof settingsActions;
}

export class SettingsScreen extends Component<SettingsScreenProps> {
  render() {
    const { syncInterval, postsUrl, actions, postsCount } = this.props;
    return (
      <SettingsView 
        syncInterval={syncInterval}
        postsUrl={postsUrl}
        postsCount={postsCount}
        intervalChanged={this.updateInterval}
        urlChanged={this.updateUrl}
        postsCountChanged={this.updatePostsCount}
      />
    );
  }

  updateInterval = (v: number) => {
    this.props.actions.updateInterval(v);
  }

  updateUrl = (v: string) => {
    this.props.actions.updateUrl(v);
  }
  
  updatePostsCount = (v: number) => {
    this.props.actions.updatePostsCount(v);
  }
}

export default connect(
  ({settings: {syncInterval, postsUrl, postsCount}}: RootState) => ({syncInterval, postsUrl, postsCount}),
  dispatch => ({actions: bindActionCreators(settingsActions, dispatch)})
)(SettingsScreen);
