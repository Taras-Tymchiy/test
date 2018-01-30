// @flow
import * as React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

type SpinnerProps = {
  spinner?: boolean,
  error?: Error,
};

export default function SpinnerHOC<Props: SpinnerProps, Component: React.ComponentType<$Diff<Props, SpinnerProps>>>(Comp: Component): React.ComponentType<Props>  {
  return ({ spinner, ...props }: Props) => (
    <View style={{ flex: 1 }}>
      <Comp {...props} />
      {spinner &&
        <View
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: 'rgba(0, 0, 0, 0.6)', justifyContent: 'center' }
          ]}
        >
          <ActivityIndicator size="large" />
        </View>}
    </View>
  );
};