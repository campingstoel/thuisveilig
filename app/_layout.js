import { Stack } from "expo-router";
import { AuthStore } from '../db/auth'
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


const RootLayout = () => {
  const {initialized, isLoggedIn} = AuthStore.useState();
  const [loaded, error] = useFonts({
    'Poppins': require('../assets/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('../assets/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('../assets/Poppins-Medium.ttf'),
    'Poppins-Light': require('../assets/Poppins-Light.ttf'),
    'Poppins-MediumItalic': require('../assets/Poppins-MediumItalic.ttf'),

  });

  useEffect(() => {
    if(error) throw error;
  }
  , [error]);

  useEffect(() => {
    if(loaded && initialized) SplashScreen.hideAsync();
  }
  , [loaded, initialized]);

  useEffect(() => {
    if(initialized && isLoggedIn && loaded) { router.replace("(auth)/(tabs)");
    }
    else { router.replace("(public)/login");
    }
  }
  , [initialized, isLoggedIn, loaded]);


  return (
    <Stack>
          <Stack.Screen name="(auth)/(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="(public)/login"
            options={{ headerShown: false }}
          />
    </Stack>
  );
};

export default RootLayout;
