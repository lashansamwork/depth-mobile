import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';

import sailboat from '../../../assets/sailboat.png';
import styles from './styles';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={sailboat} />
        <Text style={styles.logoText}>depth</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
