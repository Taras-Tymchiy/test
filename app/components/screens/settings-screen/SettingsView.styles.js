// @flow
import { StyleSheet } from 'react-native';
import { SPACING_L, COLOR_ELEMENT_BORDER } from '../../styles/constants';

export default StyleSheet.create({
  container: {
    marginTop: SPACING_L,
    marginBottom: SPACING_L,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: COLOR_ELEMENT_BORDER,
  }
});