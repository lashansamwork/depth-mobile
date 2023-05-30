import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, Text, View } from 'react-native';
import { Button, IconButton } from 'react-native-paper';

import sailboat from '@/assets/sailboat.png';
import FadeInView from '@/components/FadeInView';
import FadeOutView from '@/components/FadeOutView';
import ShrinkInView from '@/components/ShrinkView';
import Waves from '@/components/Waves';
import { THEME } from '@/constants/theme';
import { useAuth } from '@/context/auth';
import styles from './styles';

export default function Home() {
  const { width } = Dimensions.get('window');
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Waves />
      <View
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
          flexDirection: 'row',
          marginTop: 20,
        }}
      >
        <IconButton
          icon="cog"
          iconColor={THEME.pastelSun}
          onPress={() => signOut()}
          size={80}
        />
      </View>
      <ShrinkInView>
        <View style={{ ...styles.logo }}>
          <Image source={sailboat} />
          <FadeOutView>
            <Text style={styles.logoText}>depth</Text>
          </FadeOutView>
        </View>
      </ShrinkInView>
      <View
        style={{
          width: width * 0.8,
        }}
      >
        {Array.from({ length: 50 }, (_, i) => {
          return (
            <FadeInView key={i}>
              <Button>{i}</Button>
            </FadeInView>
          );
        })}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
