import React from 'react';
import { Image, View } from 'react-native';

import waves from '@/assets/waves.gif';
import globalStyles from '@/constants/styles';
import styles from './styles';

export default function Waves() {
  return (
    <View style={{ ...globalStyles.absolute, ...styles.container }}>
      <Image source={waves} style={styles.image} />
    </View>
  );
}
