import { Stack, useRootNavigationState } from "expo-router";
import { AuthStore } from '../db/auth'
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


const RootLayout = () => {
  const {initialized, isLoggedIn} = AuthStore.useState();


  SplashScreen.preventAutoHideAsync();


  useEffect(() => {
    if(initialized && isLoggedIn) { 
      SplashScreen.hideAsync();
      router.replace("(auth)/(tabs)");
      }
    else { router.replace("(public)/login");
    }
  
  }
  , [initialized, isLoggedIn]);


  return (
    <RootNavigationLayout />
  );

};


function RootNavigationLayout () {
  return (
    <Stack>
      <Stack.Screen name="(auth)/(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(public)/login"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}


export default RootLayout;
