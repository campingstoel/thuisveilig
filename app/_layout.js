import { Stack } from "expo-router";
import { AuthStore } from '../db/auth'
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


const RootLayout = () => {
  const {initialized, isLoggedIn} = AuthStore.useState();
  const [loaded, error] = useFonts({
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
    if(initialized && isLoggedIn) { router.replace("(auth)/(tabs)");
    }
    else { router.replace("(public)/login");
    }
  }
  , [initialized, isLoggedIn]);


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
