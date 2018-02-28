import React from 'react';
import { View, Text } from 'react-native';
import styles from './Home.component.style';
import TextArea from '../TextArea/TextArea.component';

export default () => (
  <View style={styles.container}>
    <Text> Please enter your note here</Text>
    <TextArea />
  </View>
);
