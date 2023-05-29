import React from 'react';
import { Stack } from 'expo-router';

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'Home',
};

export default function GuestLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
