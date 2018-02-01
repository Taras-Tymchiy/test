import React, { PureComponent } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import Navigator from './Navigator';


class NavigationContainer extends PureComponent {
  render() {
    return (
      <Navigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.navigation,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  navigation: state.navigation
});

export default connect(mapStateToProps)(NavigationContainer);
  