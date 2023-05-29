import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import sailboat from '../../../../assets/sailboat.png';
import styles from './styles';

export default function Home() {
  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
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
        <Text>Home screen</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
