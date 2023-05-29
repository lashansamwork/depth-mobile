import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, Text, View } from 'react-native';
import { HelperText } from 'react-native-paper';

import sailboat from '@/assets/sailboat.png';
import FadeInView from '@/components/FadeInView';
import Waves from '@/components/Waves';
import styles from './styles';

export default function SignLayout({ children, errorText }) {
  const { width } = Dimensions.get('window');

  return (
    <FadeInView>
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
    </FadeInView>
  );
}
