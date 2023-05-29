import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Toast from 'react-native-toast-message';

import sailboat from '@/assets/sailboat.png';
import Waves from '@/components/Waves';
import { THEME } from '@/constants/theme';
import { useAuth } from '@/context/auth';
import styles from './styles';

export default function Home() {
  const { width } = Dimensions.get('window');
  const { signOut } = useAuth();

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋',
    });
  };

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
        <Text>Home screen</Text>
        <Button
          buttonColor={THEME.primary}
          icon="account"
          mode="contained"
          onPress={showToast}
        >
          Show toast
        </Button>
        <View style={{ padding: 10 }} />
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
