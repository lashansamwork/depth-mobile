import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

export default function FadeOutView({ children }) {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}
    >
      {children}
    </Animated.View>
  );
}
