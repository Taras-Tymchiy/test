// @flow
import * as React from 'react';
import {
    Platform,
    StyleSheet,
    View
  } from 'react-native';
import StyledHOC from '../HOCs/StyledHOC';
import { SPACING_M, SPACING_S, COLOR_ELEMENT_BG, COLOR_ELEMENT_BORDER } from '../styles/constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_ELEMENT_BG,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: COLOR_ELEMENT_BORDER,
    padding: SPACING_M
  }
});

export default StyledHOC(View, styles.container);
