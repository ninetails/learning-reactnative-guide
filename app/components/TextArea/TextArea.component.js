import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import styles from './TextArea.component.style';

export default class TextArea extends Component {
  static propTypes = {
    style: PropTypes.objectOf(PropTypes.string)
  }

  static defaultProps = {
    style: {}
  }

  state = {
    text: ''
  }

  render() {
    const { style, ...extraProps } = this.props;
    return (
      <TextInput
        {...extraProps}
        style={[styles.textArea, style]}
        multiline
        onChangeText={text => this.setState({ text })}
        value={this.state.text}
      />
    );
  }
}
