import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class HelloWorld extends Component {
  componentDidMount() {
    this.props.onChangeText(this.props.query);
  }
  render() {
    const { onChangeText, color, query, result } = this.props;
    const style = StyleSheet.create({
      helloWorld: {
        color: color,
        fontSize: 20,
        textAlign: 'left',
      }
    });
    return (
      <View>
        <TextInput multiline={true} numberOfLines={12} onChangeText={onChangeText} style={style.helloWorld}>{query}</TextInput>
        <Text style={style.helloWorld}>{result}</Text>
      </View>
    );
  }
}

HelloWorld.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  result: PropTypes.string,
  query: PropTypes.string,
}
