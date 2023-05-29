import React, { useEffect } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Waves from '@/screens/Waves';
import { supabase } from '@/client/supabase';
import styles from './styles';
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
import { useAuth } from './context/auth';

export default function App() {
  const { signIn } = useAuth();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      signIn(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      signIn(session);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Waves />
    </View>
  );
}
