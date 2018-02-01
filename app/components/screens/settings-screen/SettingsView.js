// @flow
import * as React from 'react';
import {
  Platform,
  Text,
  TextInput,
  View
} from 'react-native';
import FormControlWrapper from '../../molecules/FormControlWrapper';
import styles from './SettingsView.styles';

type SettingsViewState = {
  syncInterval: string;
  postsUrl: string;
  postsCount: string;
}

export type SettingsViewProps = {
  syncInterval: number;
  postsUrl: string;
  postsCount: number;
  intervalChanged: (v: number) => void;
  urlChanged: (v: string) => void;
  postsCountChanged: (v: number) => void;
}

export default class SettingsView 
  extends React.Component<SettingsViewProps, SettingsViewState> {
    constructor(props: SettingsViewProps) {
      super(props);
      this.state = this.propsToState(props);
    }

    propsToState({ syncInterval, postsUrl, postsCount }: SettingsViewProps) {
      return  { 
        postsUrl, 
        syncInterval: String(syncInterval),
        postsCount: String(postsCount)
      };
    }

    componentWillReceiveProps(newProps: SettingsViewProps) {
      this.setState(this.propsToState(newProps));
    }

    toNumeric = (val: string)=> String(val).replace(/[^0-9]/g, ''); 

    onIntervalChange = (v: string) => { this.setState({syncInterval: this.toNumeric(v)}) };
    onIntervalSave = () => { this.props.intervalChanged(+this.state.syncInterval) };

    onPostsCountChange = (v: string) => { this.setState({postsCount: this.toNumeric(v)}) };
    onPostsCountSave = () => { this.props.postsCountChanged(+(this.state.postsCount || 0)) };
    
    onUrlChange = (postsUrl: string) => { this.setState({postsUrl}) };
    onUrlSave = () => { this.props.urlChanged(this.state.postsUrl) };
    
    onDiscard = () => {
      this.setState(this.propsToState(this.props)); 
    };
    
    render () {
      const { syncInterval, postsUrl, postsCount } = this.state;
      return (
        <View style={styles.container} >
          {/* $FlowFixMe */}
          <FormControlWrapper 
              title="Endpoint url"
              value={postsUrl} 
              onSave={this.onUrlSave} 
              onDiscard={this.onDiscard} >
            <TextInput value={postsUrl} multiline={true} onChangeText={this.onUrlChange} />
          </FormControlWrapper>
          <FormControlWrapper 
              title="Posts number"
              description="The number of posts to fetch from API and display (0 means unlimited)"
              value={postsCount} 
              onSave={this.onPostsCountSave}
              keyboardType = 'numeric'
              onDiscard={this.onDiscard} >
            <TextInput value={postsCount} onChangeText={this.onPostsCountChange} />
          </FormControlWrapper>
          <FormControlWrapper 
              title="Sync interval" 
              description="Synchronization interval in milliseconds. Values less than 1000 are not allowed and will be overwritten to 1000"
              value={`${syncInterval} ms`} 
              onSave={this.onIntervalSave} 
              keyboardType = 'numeric'
              onDiscard={this.onDiscard} >
            <TextInput value={syncInterval} onChangeText={this.onIntervalChange} />
          </FormControlWrapper>
        </View>
      );
    }
};
