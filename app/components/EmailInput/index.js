import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

import styles from './styles';

export default function Email({ onChangeText, value, errorMsg }) {
  const [emailFocused, setEmailFocus] = useState(false);

  const handleEmailFocus = () => {
    setEmailFocus(true);
  };

  return (
    <View>
      <TextInput
        autoCapitalize="none"
        keyboardType="email-address"
        label="Email"
        mode="outlined"
        onChangeText={onChangeText}
        onFocus={handleEmailFocus}
        outlineStyle={styles.inputOutline}
        right={<TextInput.Icon icon="email" />}
        style={emailFocused ? styles.inputActive : styles.input}
        value={value}
      />
      <Text style={styles.errorText}>{errorMsg ? errorMsg : ''}</Text>
    </View>
  );
}
