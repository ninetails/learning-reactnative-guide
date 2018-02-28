import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import styles from './TextArea.component.style';

export default class TextArea extends Component {
  state = {
    text: ''
  }
  render() {
    const { style, ...extraProps } = this.props;
    return (
      <TextInput
        {...extraProps}
        style={[styles.textArea, style]}
        multiline={true}
        onChangeText={(text) => this.setState({ text })}
        value={this.state.text}
      />
    );
  }
}
