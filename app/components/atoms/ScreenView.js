// @flow
import * as React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { COLOR_SCREEN_BG } from '../styles/constants';
import StyledHOC from '../HOCs/StyledHOC';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: COLOR_SCREEN_BG,
  },
});

export default StyledHOC(View, styles.view);
