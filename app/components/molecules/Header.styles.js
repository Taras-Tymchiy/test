import React from 'react';
import {
  Platform,
  StyleSheet
} from 'react-native';
import { SPACING_M } from '../styles/constants';

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;

let platformContainerStyles;
if (Platform.OS === 'ios') {
  platformContainerStyles = {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0, 0, 0, .3)',
  };
} else {
  platformContainerStyles = {
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: StyleSheet.hairlineWidth,
    shadowOffset: {
      height: StyleSheet.hairlineWidth,
    },
    elevation: 4,
  };
}

export default StyleSheet.create({
  container: {
    backgroundColor: Platform.OS === 'ios' ? '#F7F7F7' : '#FFF',
    ...platformContainerStyles,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: STATUSBAR_HEIGHT
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    bottom: 0,
    left: TITLE_OFFSET,
    right: TITLE_OFFSET,
    top: 0,
    position: 'absolute',
    alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
  },
  rightButton: {
    width: TITLE_OFFSET,
    paddingRight: SPACING_M
  },
  rightButtonText: {
    fontWeight: 'bold',
    textAlign: 'right'
  },
  leftButton: {
    width: TITLE_OFFSET,
    paddingLeft: SPACING_M,
  }
});
