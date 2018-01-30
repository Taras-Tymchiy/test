// @flow
import * as React from 'react';
import {
    Image
  } from 'react-native';
import { COLOR_IOS_BUTTON_TEXT, FONT_SIZE_M, ICON_SIZE, ICON_OPACITY } from '../styles/constants';

export interface IconProps {
    +source: any;
    +size?: number;
}

export default function Icon({source, size}: IconProps) {
  size = size || ICON_SIZE;
  const opacity = ICON_OPACITY;
  return (
    <Image source={source} style={{width: size, height: size, opacity}} resizeMode='center' resizeMethod='scale' />
  );
};
