import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Redirect, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { storage } from '../utils/utils';

SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
    const[isLogin, setisLogin] = useState(false);
    const access_token = storage.getString("access_token");
    useEffect(() => {
        SplashScreen.hideAsync();
    }, []);

    useEffect(() => {
      //check user is login or not
      console.log(access_token);
      if (access_token) {
        setisLogin(true);
      }
    }, [access_token]);

  return (
    <>
      <Stack screenOptions={{headerShown: false }}/>
      {isLogin ? <Redirect href="/(main)" /> : <Redirect href="/(auth)" />}
    </>
  );
};

export default RootLayout;