import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native-paper';
import { THEME } from '@/constants/theme';
import { useAuth } from '../../../context/auth';
import sailboat from '../../../../assets/sailboat.png';
import styles from './styles';

export default function Home() {
  const { width } = Dimensions.get('window');
  const { signOut } = useAuth();

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
        <Button
          buttonColor={THEME.primary}
          icon="account"
          mode="contained"
          onPress={() => signOut()}
        >
          Sign Out
        </Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
