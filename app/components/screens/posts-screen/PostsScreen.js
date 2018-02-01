// @flow
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import * as postsActions from '../../../store/actions/PostActions';
import { type PostsState } from '../../../store/reducers/StateTypes';
import { Post } from '../../../entities/Post';
import PostList from './PostList';
import PostsHeaderButton from './PostsHeaderButton';
import { type RootState } from '../../../store/reducers/StateTypes';
import SpinnerHOC from '../../HOCs/SpinnerHOC';
import ErrorHOC from '../../HOCs/ErrorHOC';

export interface PostsScreenProps {
  +posts: Post[];
  +isLoading: boolean;
  +syncInProgess: boolean;
  +error: Error;
  +syncInterval: number;
  +postsCount: number;
  +postsUrl: string;
  +isCurrentView: boolean;
  +actions: typeof postsActions;
}

const PostsListsEnhanced = SpinnerHOC(ErrorHOC(PostList));

// exporting for testing purposes
export class PostsScreen extends PureComponent<PostsScreenProps> {

  static navigationOptions = (props: any) => ({
    headerRight: <PostsHeaderButton {...props}  />,
  });

  render() {
    const { posts, isLoading, error } = this.props;
    return <PostsListsEnhanced posts={posts} spinner={isLoading && !posts.length} error={error} />
  }

  startSync(props: PostsScreenProps) {
    const { actions, syncInterval, postsUrl, syncInProgess, postsCount } = props;
    if (!syncInProgess) {
      actions.startSync({url: postsUrl, count: postsCount}, syncInterval);
    }
  }
  
  stopSync() {
    this.props.actions.stopSync();
  }

  componentWillUnmount() {
    this.stopSync();
  }
  
  componentDidMount() {
    this.startSync(this.props);
  }

  componentWillReceiveProps(nextProps: PostsScreenProps) {
    // navigation events will be implemented in react-navigation very soon
    // see the PR https://github.com/react-navigation/react-navigation/pull/3345
    // but for now will use some dirty tricks to determine whether current page is active
    if (nextProps.isCurrentView) {
      this.startSync(nextProps);
    } else {
      this.stopSync();
    }
  }

}

function mapDispatchToProps(dispatch: Dispatch<{}>) {
  return {
      actions: bindActionCreators(postsActions, dispatch)
  };
}

function mapStateToProps(state: RootState) {
  return {
      posts: state.posts.data,
      syncInProgess: state.posts.syncInProgess,
      isLoading: state.posts.isLoading,
      error: state.posts.error,
      postsUrl: state.settings.postsUrl,
      postsCount: state.settings.postsCount,
      syncInterval: state.settings.syncInterval,
      isCurrentView: state.navigation.index === 0 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsScreen);
