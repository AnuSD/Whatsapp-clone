import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import ButtonComp from '@/src/component/atoms/ButtonComp';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import { CountryPicker } from 'react-native-country-codes-picker';

const Login = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [countryName, setCountryName] = useState("India");
  const [countryCode, setCountryCode] = useState("+91");

  const onNextButtonClick = () => {
    router.push('/(auth)/verify_otp');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heading_container}>
          <Text style={styles.heading}>Enter your phone number :</Text>
          <Text style={styles.description}>
            WhatsApp will need to verify your phone number.
            <Text style={styles.link_description}> What's my number? </Text>
          </Text>
        </View>

        {/* Country Selection */}
        <View style={styles.input_main_container}>
          <TouchableOpacity 
            style={styles.dropDown_container}
            onPress={() => setShowPicker(true)}
          >
            <View />
            <Text style={styles.dropDown_title}>{countryName}</Text>
            <AntDesign name="caretdown" size={moderateScale(14)} color="black" />
          </TouchableOpacity>

          <View style={styles.horizontle_line} />

          {/* Phone Number Input */}
          <View style={styles.input_container}>
            <View style={styles.country_code}>
              <Text style={styles.country_code_text}>{countryCode}</Text>
              <View style={styles.horizontle_line} />
            </View>

            <View style={{ gap: verticalScale(10), flex: 1 }}>
              <TextInput 
                style={styles.input}
                placeholder="Enter your phone number"
                keyboardType="phone-pad"
              />
              <View style={styles.horizontle_line} />
            </View>
          </View>
        </View>
      </View>

      {/* Next Button */}
      <View style={styles.footer}>
        <ButtonComp title="Next" style={{ paddingHorizontal: scale(29) }} onPress={onNextButtonClick} />
      </View>

      {/* Country Picker Modal */}
      <ScrollView style={{ flex: 1 }}>
      <CountryPicker
        show={showPicker}
        withFilter // ✅ Fix: Move this here
        pickerButtonOnPress={(item) => {
          setCountryName(item.name?.en || item.name || "");
          setCountryCode(item.dial_code || "+");
          setShowPicker(false);
        }}
        onBackdropPress={() => setShowPicker(false)}
        lang="en"
        enableModalAvoiding={true} // ✅ Ensures scrolling inside modal
      />
      </ScrollView>;
    </View>
  );
};

// Styles remain the same
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: verticalScale(90),
    paddingHorizontal: scale(40),
    alignItems: 'center',
  },
  header: {
    gap: verticalScale(50),
  },
  footer: {},
  heading_container: {
    gap: verticalScale(20),
  },
  input_main_container: {},
  input_container: {
    paddingVertical: verticalScale(12),
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(20),
  },
  heading: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    fontSize: moderateScale(13),
    fontWeight: '400',
    color: '#000',
  },
  link_description: {
    color: '#002AC0',
  },
  horizontle_line: {
    width: '100%',
    height: verticalScale(1),
    backgroundColor: '#05AA82',
  },
  dropDown_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(20),
  },
  dropDown_title: {
    color: '#000',
    fontSize: moderateScale(16),
    fontWeight: '500',  
  },
  input: {
    fontSize: moderateScale(16),
  },
  country_code: {
    gap: verticalScale(10),
    fontWeight: '500',
    color: '#000',
  },
  country_code_text: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    color: '#000',
  },
});

export default Login;
