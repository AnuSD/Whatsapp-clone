import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import imagepath from '@/src/constants/imagepath';
import { verticalScale, moderateScale } from 'react-native-size-matters';
import { router } from 'expo-router';

const Auth = () => {
  const[isLoading, setIsLoading] = useState(false);

  let navigate_to_welcome = () => {
    router.push("/(auth)/terms_agree")
  };

  let loading_timeout = () => {
    setIsLoading(true);
    setTimeout(navigate_to_welcome, 3000);
  };
      
  useEffect(() => {
    const timeout = setTimeout(loading_timeout, 2000);

    return() => {
      clearTimeout(timeout)
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.body}>
          <Image 
            source={imagepath.logo}
            style={styles.logo_style}
            resizeMode='contain'
          />
          <Text style={styles.whatsapp_text}>WhatsApp</Text>
        </View>
        <View style={styles.footer}>
          {
            isLoading ? (
              <>
              <ActivityIndicator size={verticalScale(48)} color={'#0CCC83'}/>
              <Text style={styles.loading_text}>Loading...</Text>
              </>
            ) : ( 
              <>
              <Text style={styles.from_text}>from</Text>
              <Text style={styles.facebook_text}>Facebook</Text>
              </>
            )
          }
        </View>
    </SafeAreaView>
  )
};
const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: "center",
    justifyContent: 'space-between',
    paddingVertical: verticalScale(50),
   },
   header:{
   },
   body: {
    gap: verticalScale(10),
    alignItems: 'center',
   },
   whatsapp_text: {
    fontSize: moderateScale(35),
    color: '#000',
    fontWeight: 'bold',
   },
   loading_text: {
    fontSize: moderateScale(20),
    color: '#00A884',
    fontWeight: 'bold',
    marginTop: 15,
   },
   logo_style: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: 10,
   },
   footer: {
     alignItems: 'center',
     height: verticalScale(80),
     justifyContent: 'flex-end',
   },
   from_text: {
     fontSize: moderateScale(12),
     color: '#867373',
   },
   facebook_text: {
    fontSize: moderateScale(15),
    color: '#000',
    fontWeight: 'bold',
   },
});
export default Auth;