// @flow
import * as React from 'react';
import {
    Platform,
    StyleSheet,
    Button,
    Text,
    View,
    TouchableOpacity
  } from 'react-native';
import { COLOR_IOS_BUTTON_TEXT, FONT_SIZE_M } from '../styles/constants';
import { textRegular, textPrimary } from '../styles/mixins';

export interface SimpleButtonProps {
    +title: string;
    +style?: any;
    +textStyle?: any;
    +onPress: () => void;
}

export default function SimpleButton({title, onPress, style, textStyle}: SimpleButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={[styles.regular, textStyle]} >{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  regular: {
    ...textRegular,
    color: COLOR_IOS_BUTTON_TEXT
  }
});