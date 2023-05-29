import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { useRouter } from 'expo-router';
import { THEME } from '@/constants/theme';
import { supabase } from '@/client/supabase';
import { useAuth } from '@/context/auth';
import { validateEmail, validatePassword } from '@/utils/validation';
import { MSG_VALIDATION } from '@/messages/validation';
import SignLayout from '../Layout';
import styles from '../SignIn/styles';

export default function SignUp() {
  const { width } = Dimensions.get('window');
  const { signIn } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailFocused, setEmailFocus] = useState(false);
  const [passwordFocused, setPasswordFocus] = useState(false);
  const [errorText, setErrorText] = useState('');

  async function signUpWithEmail() {
    setLoading(true);
    if (!validateEmail(email)) return setErrorText(MSG_VALIDATION.EMAIL);
    if (!validatePassword(password)) return setErrorText(MSG_VALIDATION.PASSWORD);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setErrorText(error.message);
    } else {
      signIn(data);
    }

    setLoading(false);
  }

  const handleEmailFocus = () => {
    setEmailFocus(true);
  };

  const handlePasswordFocus = () => {
    setPasswordFocus(true);
  };

  return (
    <SignLayout errorText={errorText}>
      <TextInput
        label="Email"
        mode="outlined"
        onChangeText={(value) => setEmail(value)}
        onFocus={handleEmailFocus}
        outlineStyle={styles.inputOutline}
        right={<TextInput.Icon icon="email" />}
        style={emailFocused ? styles.inputActive : styles.input}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        mode="outlined"
        onChangeText={(value) => setPassword(value)}
        onFocus={handlePasswordFocus}
        outlineStyle={styles.inputOutline}
        right={<TextInput.Icon icon="eye" />}
        secureTextEntry={true}
        style={passwordFocused ? styles.inputActive : styles.input}
        value={password}
        autoCapitalize="none"
      />
      <View style={{ ...styles.buttonWrapper, width: width * 0.8 }}>
        <Button
          style={{ marginRight: 10 }}
          icon="account-plus"
          mode="contained"
          buttonColor={THEME.secondary}
          onPress={() => router.push('/screens/Guest/SignIn')}
          textColor={THEME.offBlack}
        >
          Sign in
        </Button>
        <Button
          buttonColor={THEME.primary}
          icon="account"
          mode="contained"
          onPress={() => signUpWithEmail()}
        >
          Sign Up
        </Button>
      </View>
    </SignLayout>
  );
}