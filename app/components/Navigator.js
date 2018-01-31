import { StackNavigator } from 'react-navigation';
import PostsScreen from './screens/posts-screen/PostsScreen';
import SettingsScreen from './screens/settings-screen/SettingsScreen';

const RootNavigator = StackNavigator({
  Posts: {
    screen: PostsScreen,
    navigationOptions: {
      headerTitle: 'Recent Posts',
    },
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      headerTitle: 'Settings',
    },
  }
});

export default RootNavigator;