// @flow
import * as React from 'react';
import {
    Platform,
    StyleSheet
  } from 'react-native';
import { Post } from '../../entities/Post';

type StyledProps = {
  style?: any
}

export default function StyledHOC<Props: StyledProps, Component: React.ComponentType<Props>>(
    Comp: Component, defaultStyle: any
): React.ComponentType<Props>{
  return function Styled(props?: Props) {
    const mappedProps: Props = {
      ...props,
      style: [defaultStyle, props && props.style]
    };
    return (
      <Comp {...mappedProps} />
    );
  }
};
