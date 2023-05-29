import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { HelperText } from 'react-native-paper';
import Waves from '@/components/Waves';
import sailboat from '@/assets/sailboat.png';

import styles from './styles';

export default function SignLayout({ children, errorText }) {
  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Waves />
      <View style={styles.logo}>
        <Image source={sailboat} />
        <Text style={styles.logoText}>depth</Text>
      </View>
      <View
        style={{
          marginTop: 30,
          width: width * 0.8,
        }}
      >
        <HelperText type="error" visible={errorText}>
          {errorText}
        </HelperText>
        {children}
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
