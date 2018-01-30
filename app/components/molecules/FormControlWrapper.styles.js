// @flow
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { COLOR_ELEMENT_BG, SPACING_S, SPACING_M, COLOR_ELEMENT_BORDER } from '../styles/constants';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: COLOR_ELEMENT_BG,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: COLOR_ELEMENT_BORDER,
    padding: SPACING_M,
    paddingRight: SPACING_S,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textRow: {
    flex:1, 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
    marginRight: SPACING_S
  },
  inputContainer: {
    backgroundColor: COLOR_ELEMENT_BG,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: COLOR_ELEMENT_BORDER,
    padding: SPACING_M,
  },
  descriptionContainer: {
    padding: SPACING_M
  }
});