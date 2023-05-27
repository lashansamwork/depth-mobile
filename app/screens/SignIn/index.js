import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import styles from './styles';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Inter-Black' }}>Sign In Again Again AGAIN</Text>
      <StatusBar style="auto" />
    </View>
  );
}
