import React from 'react';
import * as Font from 'expo-font';
import { Slot } from 'expo-router';
import Toast from 'react-native-toast-message';
import { AuthProvider } from '@/context/auth';

export default function Root() {
  const [fontsLoaded] = Font.useFonts({
    'Inter-Black': require('../assets/fonts/Inter/Inter-Black.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <Slot />
      <Toast />
    </AuthProvider>
  );
}
