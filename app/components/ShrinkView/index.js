import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

export default function ShrinkInView({ children }) {
  const shrinkAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(shrinkAnim, {
      toValue: 0.5,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [shrinkAnim]);

  return (
    <Animated.View
      style={{
        transform: [{ scale: shrinkAnim }],
      }}
    >
      {children}
    </Animated.View>
  );
}
