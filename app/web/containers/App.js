import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// dumb components
import Header     from '../components/Header';
import HelloWorld from '../components/HelloWorld';
// actions
import {
  toggleColor,
  exampleAsync,
  evalQuery,
} from '../../actions/actions';

/** The app entry point */
class ReactNativeWebHelloWorld extends Component {
  render() {
    // injected by connect call
    const { dispatch, color, data, result, query } = this.props;

    return (
      <div className="react-native-web">
        <Header />
        <HelloWorld
          onChange={(e) => dispatch(evalQuery(e))}
          color={color}
          result={result}
          query={query}
        />
      </div>
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
