import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import Toast from 'react-native-toast-message';
import { supabase } from '@/client/supabase';
import { ROUTES } from '@/constants/routes';

const AuthContext = createContext(null);
// This hook can be used to access the user info.
export function useAuth() {
  return useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[1] !== 'Auth';
    initApp(user).then(() => {
      if (
        // If the user is not signed in and the initial segment is not anything in the auth group.
        !user &&
        !inAuthGroup
      ) {
        // Redirect to the sign-in page.
        if (segments.length === 0 || !inAuthGroup) {
          router.replace(ROUTES.GUEST);
        }
      } else if (user && inAuthGroup) {
        // Redirect away from the sign-in page.
        router.replace(ROUTES.AUTH);
      }
    });
  }, [user, segments]);
}

async function initApp() {
  //any future backend calls comes here
  await SplashScreen.hideAsync();
  return true;
}

export function AuthProvider({ children }) {
  const [user, setAuth] = useState(null);

  useProtectedRoute(user);

  const handleSignIn = (data) => setAuth(data);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Error signing out.',
      });
    }

    setAuth(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signIn: handleSignIn,
        signOut: handleSignOut,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
