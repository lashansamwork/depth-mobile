import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';

import { supabase } from '@/client/supabase';
import FadeInView from '@/components/FadeInView';
import Waves from '@/components/Waves';
import { useAuth } from '@/context/auth';
import SignIn from '@/screens/Guest/SignIn';
import styles from './styles';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

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
      <FadeInView>
        <SignIn />
      </FadeInView>
    </View>
  );
}
