import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import Chat from "@/src/component/molecules/Chat";
import Call from "@/src/component/molecules/Call";
import Status from "@/src/component/molecules/Status";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Entypo from '@expo/vector-icons/Entypo';
import Octicons from '@expo/vector-icons/Octicons';

const Main = () => {
  const [currentPage, setCurrentPage] = useState("Chat");

  const ActivePage = () => {
    switch (currentPage) {
      case "chat":
        return <Chat />;
        case "status":
        return <Status />;
      case "calls":
        return <Call />;
      default:
        return <Chat />;
    }
  };

  const WhatsAppHeader = () => {
    return(
    <View style={styles.whatsapp_header}>
       <Text style={styles.whatsapp_text}>WhatsApp</Text>
       <View style={styles.icon_container}>
        <Entypo name="dots-three-vertical" style={styles.header_icon}/>
        <Octicons name="search" style={styles.header_icon} />
       </View>
    </View>
  );
};
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#008069" barStyle={"light-content"}/>
      <WhatsAppHeader />
      <View style={styles.Topbarcontainer}>
        {["chat", "status", "calls"].map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => setCurrentPage(item)} style={[styles.TopbarButton, item== currentPage && {borderColor: '#fff'}] }>
              <Text style={styles.TopbarText}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {ActivePage()}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Topbarcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(10),
    backgroundColor: '#008069',
    gap: scale(10),
  },
  TopbarButton: {
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 3,
    paddingBottom: verticalScale(10),
    borderColor: '#008069',
  },
  TopbarText:{
   fontSize: moderateScale(14),
   fontWeight: 'bold',
   color: '#fff',
   textTransform: 'uppercase',
  },
  header_icon:{
    color: '#fff',
    fontSize: moderateScale(24),
  },
  whatsapp_header: {
    backgroundColor: '#008069',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(15),
    paddingBottom: verticalScale(17),
    paddingTop: verticalScale(10),
  },
  icon_container: {
   flexDirection: "row",
   gap: scale(10),
  },
  whatsapp_text:{
   color: '#fff',
   fontSize: moderateScale(20),
   fontWeight: 'bold',
  },
});
export default Main;
