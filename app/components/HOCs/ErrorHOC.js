// @flow
import * as React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { TextRegular } from '../atoms/Text';
import { COLOR_TEXT_ERROR, COLOR_SCREEN_BG } from '../styles/constants';

type ErrorProps = {
  error?: Error
};

export default function ErrorHOC<Props: ErrorProps, Component: React.ComponentType<$Diff<Props, ErrorProps>>>(Comp: Component): React.ComponentType<Props> {
  return ({ error, ...props }: Props) => (
    <View>
      <Comp {...props}/>
      {error &&
        <View style={[ StyleSheet.absoluteFill, styles.overlay ]} >
          <TextRegular style={styles.errorText} >Oops</TextRegular>
          <TextRegular style={styles.errorText} >{error.message}</TextRegular>
        </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: COLOR_TEXT_ERROR
  },
  overlay: { 
    backgroundColor: COLOR_SCREEN_BG, 
    justifyContent: 'center',
    alignItems: 'center',
  }
});