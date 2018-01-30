// @flow
import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { TextRegular } from '../atoms/Text';
import { COLOR_TEXT_ERROR, COLOR_SCREEN_BG } from '../styles/constants';

export default (Comp: ReactClass<*>) => {
  return ({ error, children, ...props }: Object) => (
    <View style={{ flex: 1 }}>
      <Comp {...props}>
        {children}
      </Comp>
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