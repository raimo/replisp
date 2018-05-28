import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { connect }  from 'react-redux';
import { appStyle } from '../styles/styles';
// dumb components
import Header     from '../components/Header';
import HelloWorld from '../components/HelloWorld';
// actions
import {
  toggleColor,
  evalQuery,
} from '../../actions/actions';

/** The app entry point */
class ReactNativeWebHelloWorld extends Component {
  render() {
    // injected by connect call
    const {dispatch, color, data, query, result} = this.props;

    return (
      <View style={appStyle.reactNativeWeb}>
        <Header />
        <HelloWorld
          onChangeText={(e) => dispatch(evalQuery(e))}
          color={color}
          query={query}
          result={result}
        />
      </View>
    );
  }
}

ReactNativeWebHelloWorld.propTypes = {
  dispatch: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

const select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select)(ReactNativeWebHelloWorld);
