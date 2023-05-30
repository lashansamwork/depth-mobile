import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { Button } from 'react-native-paper';
import Toast from 'react-native-toast-message';

import { supabase } from '@/client/supabase';
import Email from '@/components/EmailInput';
import Password from '@/components/PasswordInput';
import { THEME } from '@/constants/theme';
import { useAuth } from '@/context/auth';
import { MSG_VALIDATION } from '@/messages/validation';
import SignLayout from '@/screens/Guest/Layout';
import { validateEmail, validatePassword } from '@/utils/validation';
import styles from './styles';

export default function SignIn() {
  const { width } = Dimensions.get('window');
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignIn, setIsSignIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorTextEmail, setErrorTextEmail] = useState('');
  const [errorTextPassword, setErrorTextPassword] = useState('');

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Error signing in',
      });
    } else {
      signIn(data);
    }
  }

  async function signUpWithEmail() {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Error registering',
      });
    } else {
      signIn(data);
    }
  }

  const handleSetSign = () => {
    setIsSignIn((prev) => !prev);
  };

  const handleSign = async () => {
    if (!validateEmail(email)) {
      return setErrorTextEmail(MSG_VALIDATION.EMAIL);
    } else {
      setErrorTextEmail('');
    }

    if (!validatePassword(password)) {
      return setErrorTextPassword(MSG_VALIDATION.PASSWORD);
    } else {
      setErrorTextPassword('');
    }

    setLoading(true);

    isSignIn ? await signInWithEmail() : await signUpWithEmail();

    setLoading(false);
  };

  return (
    <SignLayout>
      <Email
        onChangeText={(value) => setEmail(value)}
        value={email}
        errorMsg={errorTextEmail}
      />
      <Password
        onChangeText={(value) => setPassword(value)}
        value={password}
        errorMsg={errorTextPassword}
      />
      <View style={{ ...styles.buttonWrapper, width: width * 0.8 }}>
        <Button
          style={{ marginRight: 10 }}
          icon="account-plus"
          mode="contained"
          buttonColor={THEME.secondary}
          onPress={handleSetSign}
          textColor={THEME.offBlack}
        >
          {isSignIn ? 'Register' : 'Sign In'}
        </Button>
        <Button
          buttonColor={THEME.primary}
          icon="account"
          mode="contained"
          onPress={handleSign}
        >
          {isSignIn ? 'Sign In' : 'Register'}
        </Button>
      </View>
    </SignLayout>
  );
}
