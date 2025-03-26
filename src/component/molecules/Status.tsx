import { View, Text, FlatList,StyleSheet} from 'react-native'
import React from 'react';
import MessageCard from './MessageCard';
import imagepath from '@/src/constants/imagepath';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Ionicons from '@expo/vector-icons/Ionicons';

const Status = () => {
  const data = [
    {
      image: imagepath.sushil,
      name:"Anuradha Belkune",
      message:"10 mins ago",
    },
    {
      image: imagepath.mummy,
      name:"mummy",
      message:"40 mins ago",
    },
    {
      image: imagepath.Santo,
      name:"Santo",
      message:"Today, 7:29 am",
    },
    {
     image: imagepath.shubhangi,
      name:"sushil Belkune",
      message:"Today, 7:29 am",
    },
    {
     image: imagepath.santy,
      name:"santy",
      message:"Today, 7:00 am",
    },
    {
      image: imagepath.dad,
      name:"dad",
      message:"Yesterday, 11:10 pm",
    },
    {
      image: imagepath.shubhya,
      name:"shubhya",
      message:"10 mins ago",
    },
  ]
  return (
    <View style={{flex:1, gap:scale(10)}}>
      <MessageCard 
        name={"Anoj"} 
        message={"Tap to add status update"} 
        image={imagepath.shubhya} 
        logocomponent={
        <View style={styles.logocomponentcontainer}>
          <Ionicons name="add" size={moderateScale(21)} color="black" />
        </View>
        }/>;
      <FlatList 
         data={data}
         renderItem={({item}) => {
          return <MessageCard 
                    name={item?.name} 
                    message={item?.message} 
                    image={item?.image} 
                    />;
         }}/>
    </View>
  )
}
const styles = StyleSheet.create({
  logocomponentcontainer: {
    width: moderateScale(25),
    height: moderateScale(25),
    borderRadius: moderateScale(25),
    backgroundColor:"#008069",
    position:'absolute',
    bottom: verticalScale(-5),
    right: scale(-5),
    borderWidth: 2,
    borderColor:"#000",
  },
})
export default Status;