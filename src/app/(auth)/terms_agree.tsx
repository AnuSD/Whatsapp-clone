import { View, Text, StyleSheet,Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import imagepath from '@/src/constants/imagepath';
import ButtonComp from '@/src/component/atoms/ButtonComp';
import { router } from 'expo-router';

const TermsAgree = () => {
  const onAgree = () => {
    router.push("/(auth)/login");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome_text}>Welcome to WhatsApp</Text>
        <Image 
            source={imagepath.welcome}
            style= {styles.image_style}
            resizeMode='contain' />
        <Text style={styles.description_text}>
            Read our <Text style={styles.link_text}>Privacy Policy.</Text> Tap 
            "Agree & Continue" to accept the 
            <Text style={styles.link_text}>Teams of Service. </Text>
        </Text>
        <view style={{width: moderateScale(300)}}>
           <ButtonComp title="AGREE & CONTINUE" onPress={onAgree} />
        </view>
      </View>
      <View style={styles.footer}>
        <Text style={styles.from_text}>from</Text>
        <Text style={styles.facebook_text}>Facebook</Text>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: verticalScale(84),
    paddingHorizontal: scale(30),
  },
  header: {
    alignItems: 'center',
    gap: verticalScale(30),
  },
  footer: {
    alignItems: 'center',
  },
  from_text: {
    fontSize: moderateScale(12),
    color: '#867373',
  },
  facebook_text: {
    fontSize: moderateScale(15),
    color: '#000',
    textTransform: 'uppercase',
    fontWeight: 600,
  },
  welcome_text: {
    color: '#000',
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    marginBottom: verticalScale(10),
  },
  image_style: {
    width: moderateScale(250),
    height: moderateScale(250),
    borderRadius: moderateScale(250),
  },
  description_text: {
    textAlign: 'center',
    fontSize: moderateScale(13),
    color: '#000',
  },
  link_text: {
    color: '#0C42cc',
  },
});
export default TermsAgree;