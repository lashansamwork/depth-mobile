import React from 'react';
import { View } from 'react-native';

import Splash from '@/screens/Splash';
import SignIn from '@/screens/SignIn';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Splash />
      <SignIn />
    </View>
  );
}
