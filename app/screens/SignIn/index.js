import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { THEME } from '@/constants/theme';
import { supabase } from '@/client/supabase';
import sailboat from '../../../assets/sailboat.png';
import styles from './styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { width } = Dimensions.get('window');
  const [emailFocused, setEmailFocus] = useState(false);
  const [passwordFocused, setPasswordFocus] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    // if (error) setBanner('There was an error with Sign In.');

    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    // if (error) setBanner('There was an error with Registration.');
    setLoading(false);
  }

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
        <TextInput
          label="Email"
          mode="outlined"
          onChangeText={(value) => setEmail(value)}
          onFocus={handleEmailFocus}
          outlineStyle={styles.inputOutline}
          right={<TextInput.Icon icon="email" />}
          style={emailFocused ? styles.inputActive : styles.input}
          value={email}
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
        />
      </View>
      <View style={{ ...styles.buttonWrapper, width: width * 0.8 }}>
        <Button
          style={{ marginRight: 10 }}
          icon="account-plus"
          mode="contained"
          buttonColor={THEME.secondary}
          onPress={() => console.log('Pressed')}
          textColor={THEME.offBlack}
        >
          Register
        </Button>
        <Button
          buttonColor={THEME.primary}
          icon="account"
          mode="contained"
          onPress={() => console.log('Pressed')}
        >
          Sign In
        </Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
