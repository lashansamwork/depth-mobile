import React from 'react';
import { useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

const AuthContext = React.createContext(null);
// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';
    initApp(user).then(() => {
      if (
        // If the user is not signed in and the initial segment is not anything in the auth group.
        !user &&
        !inAuthGroup
      ) {
        // Redirect to the sign-in page.
        if (segments.length == 0 || segments[1] !== 'Guest') {
          router.replace('/screens/Guest');
        }
      } else if (user && inAuthGroup) {
        // Redirect away from the sign-in page.
        router.replace('/screens/Home');
      }
    });
  }, [user, segments]);
}

async function initApp(user) {
  //any future backend calls comes here
  SplashScreen.hideAsync();
  return true;
}

export function AuthProvider(props) {
  const [user, setAuth] = React.useState(null);

  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        signIn: (data) => setAuth(data),
        signOut: () => setAuth(null),
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
