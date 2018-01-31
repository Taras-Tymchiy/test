import React from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import SimpleButton from '../atoms/SimpleButton';
import { TextHeader } from '../atoms/Text';
import styles from './Header.styles';

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;

type HeaderProps = {
  title?: string;
  leftButtonTitle?: string;
  rightButtonTitle?: string;
  onLeftButtonPress?: ()=> void;
  onRightButtonPress?: ()=> void,
}

class Header extends React.PureComponent<HeaderProps> {
  render() {
    const containerStyles = [ styles.container, { height: APPBAR_HEIGHT } ];
    const { 
      title,
      leftButtonTitle, 
      rightButtonTitle, 
      onLeftButtonPress,
      onRightButtonPress
    } = this.props;
    return (
      <View
        style={containerStyles}
        forceInset={{ top: 'always', bottom: 'never' }}
      >
        <View style={[StyleSheet.absoluteFill, styles.header]} >
          <SimpleButton style={styles.leftButton} title={leftButtonTitle} onPress={onLeftButtonPress} />
          <View>
            <TextHeader>{title}</TextHeader>
          </View>
          <SimpleButton style={styles.rightButton} textStyle={styles.rightButtonText} title={rightButtonTitle} onPress={onRightButtonPress} />
        </View>
      </View>
    );
  }
}

export default Header;