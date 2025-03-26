import { View, Text, FlatList, StyleSheet} from 'react-native'
import React from 'react';
import MessageCard from './MessageCard';
import imagepath from '@/src/constants/imagepath';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { moderateScale } from 'react-native-size-matters';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

const Calls = () => {
  const data = [
    {
      image: imagepath.sushil,
      name:"sushil",
      message:"today, 2:00 pm",
      rightIcon:<FontAwesome name="video-camera" style={styles.callIcon} />,
      messageleftIcon:<Feather name="arrow-up-right" style={styles.messagerightIcon} />
    },
    {
      image: imagepath.mummy,
      name:"mummy",
      message:"26 june, 11:04pm",
      rightIcon:<Ionicons name="call-sharp"  style={styles.callIcon} />,
      messageleftIcon:<Feather name="arrow-down-left" style={[styles.messagerightIcon, {color: "red"}]} />
    },
    {
      image: imagepath.Santo,
      name:"Santo",
      message:"20 jan, 10:04pm",
      rightIcon:<FontAwesome name="video-camera" style={styles.callIcon} />,
      messageleftIcon:<Feather name="arrow-down-left" style={[styles.messagerightIcon, {color: "red"}]} />
    },
    {
      image: imagepath.shubhangi,
      name:"shubhangi",
      message:"4 jan, 10:04pm",
      rightIcon:<FontAwesome name="video-camera"  style={styles.callIcon} />,
      messageleftIcon:<Feather name="arrow-up-right" style={styles.messagerightIcon} />
    },
    {
      image: imagepath.santy,
      name:"santy",
      message:"1 jan, 10:04pm",
      rightIcon:<FontAwesome name="video-camera" style={styles.callIcon} />,
      messageleftIcon:<Feather name="arrow-down-left" style={[styles.messagerightIcon, {color: "red"}]} />
    },
    {
      image: imagepath.dad,
      name:"dad",
      message:"26 dec, 11:04pm",
      rightIcon:<Ionicons name="call-sharp" style={styles.callIcon} />,
      messageleftIcon:<Feather name="arrow-up-right" style={styles.messagerightIcon} />
    },
    {
      image: imagepath.shubhya,
      name:"shubhya",
      message:"26 dec, 10:04pm",
      rightIcon:<Ionicons name="call-sharp" style={styles.callIcon} />,
      messageleftIcon:<Feather name="arrow-down-left" style={[styles.messagerightIcon, {color: "red"}]} />
    },
  ]
  return (
    <View>
      <FlatList 
         data={data}
         renderItem={({item}) => {
          return <MessageCard 
                    name={item?.name} 
                    message={item?.message} 
                    image={item?.image} 
                    rightIcon= {item?.rightIcon}
                    messageleftIcon={item?.messageleftIcon}
                    />;
         }}/>
    </View>
  )
}
const styles = StyleSheet.create({
  callIcon:{
    color:'#008069',
    fontSize: moderateScale(20),
  },
  messagerightIcon: {
    fontSize: moderateScale(15),
    color:'#008069',
  },
})
export default Calls;