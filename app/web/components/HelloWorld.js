import React, { Component, PropTypes } from 'react';

export default class HelloWorld extends Component {
  componentDidMount() {
    this.props.onChange(this.props.query);
  }
  render() {
    const { onChange, color, query, result } = this.props;
    return (
      <div>
        <textarea className="hello-world" onChange={onChange} style={{color: color, textAlign: 'left'}} value={query}></textarea>
        <div className="hello-world">{result}</div>
      </div>

    );
  }
}

HelloWorld.propTypes = {
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  result: PropTypes.string,
  query: PropTypes.string,
}
