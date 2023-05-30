import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

import styles from '@/components/EmailInput/styles';

export default function Password({ onChangeText, value, errorMsg }) {
  const [passwordFocused, setPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordFocus = () => {
    setPasswordFocus(true);
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <View>
      <TextInput
        autoCapitalize="none"
        label="Password"
        mode="outlined"
        onChangeText={onChangeText}
        onFocus={handlePasswordFocus}
        outlineStyle={styles.inputOutline}
        secureTextEntry={!showPassword}
        style={passwordFocused ? styles.inputActive : styles.input}
        value={value}
        right={
          <TextInput.Icon
            icon={showPassword ? 'eye-off' : 'eye'}
            onPress={handleShowPassword}
          />
        }
      />
      <Text style={styles.errorText}>{errorMsg ? errorMsg : ''}</Text>
    </View>
  );
}
