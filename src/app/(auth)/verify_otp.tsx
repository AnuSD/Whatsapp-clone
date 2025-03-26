import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import ButtonComp from '@/src/component/atoms/ButtonComp';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import OTPInput from "@codsod/react-native-otp-input";
import { storage } from '@/src/utils/utils';

const Verify_OTP = () => {
  const [otp, setOTP] = useState("");

  const onPress = () => {
    console.log(otp);
    storage.set("access_token", "ghfegfyiuoiipp");
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <AntDesign name="arrowleft" style={styles.backButton} />
        <Text style={styles.headTitle}>Enter otp code</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.otpSendText}>Code has been send to +91 11******44</Text>
        <OTPInput 
            length={4} 
            onOtpComplete={(txt: string) => setOTP(txt)} 
            style={styles.otp_container}
            inputStyle={styles.input_Style} />
        <Text style={styles.otpSendText}>Resend code in <Text style={styles.counterText} >56</Text> s</Text>
      </View>
      <View style={styles.footer}>
        <ButtonComp title="Verify" onPress={onPress} style={styles.verifyButton} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: moderateScale(20),
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: verticalScale(30),
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10),
  },
  backButton: {
    fontSize: moderateScale(24),
    color: '#000',
    fontWeight: 'bold',
  },
  headTitle: {
    fontSize: moderateScale(24),
    color: '#000',
    fontWeight: 'bold',
  },
  body: {
    alignItems: 'center',
    gap: verticalScale(25),
  },
  otpSendText: {
    fontSize: moderateScale(16),
    fontWeight: 400,
  },
  resendText: {},
  footer: {},
  verifyButton: {
    borderRadius: moderateScale(30),
  },
  counterText: {
    color: '#00A884',
  },
  input_Style: {
    borderColor: '#000',
    borderRadius: moderateScale(14),
   height: verticalScale(50),
   width: scale(50),
  },
  otp_container: {
    // gap: scale(10),
  },
})
export default Verify_OTP;