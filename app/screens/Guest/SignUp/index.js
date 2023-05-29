import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, Text, View } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';

import { useRouter } from 'expo-router';
import { THEME } from '@/constants/theme';
import { supabase } from '@/client/supabase';
import sailboat from '../../../../assets/sailboat.png';
import { useAuth } from '../../../context/auth';
import styles from './styles';

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { width } = Dimensions.get('window');
  const [emailFocused, setEmailFocus] = useState(false);
  const [passwordFocused, setPasswordFocus] = useState(false);
  const [errorText, setErrorText] = useState('');
  const { signIn } = useAuth();

  async function signUpWithEmail() {
    setLoading(true);
    let errorMessage = '';
    if (!validateEmail(email)) {
      errorMessage = 'Enter a valid email';
    }

    if (password.length === 0) {
      errorMessage += '\nPassword cannot be empty';
    }

    if (errorMessage) {
      setErrorText(errorMessage);
    } else {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setErrorText(error.message);
      } else {
        signIn(data);
      }
    }

    setLoading(false);
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleEmailFocus = () => {
    setEmailFocus(true);
  };

  const handlePasswordFocus = () => {
    setPasswordFocus(true);
  };

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
        <HelperText type="error" visible={errorText}>
          {errorText}
        </HelperText>
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
      </View>
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
      <StatusBar style="auto" />
    </View>
  );
}
