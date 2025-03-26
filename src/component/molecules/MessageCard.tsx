import { View, Text, TouchableOpacity,StyleSheet, Image } from 'react-native'
import React from 'react';
import imagepath from '@/src/constants/imagepath';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const MessageCard = ({name,message,time,Count,image,logocomponent, rightIcon,messageleftIcon}:any) => {
  return (
    <TouchableOpacity style={styles.Button}>
      <View style={styles.left_container}>
         <View>
            <Image source={image} style={styles.image} />
            {logocomponent}
         </View>
         <View>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.flexrow}> 
               {messageleftIcon}
              <Text style={styles.message}>{message}</Text>
            </View>
        </View>
      </View>
      <View style={styles.right_container}>
       {time && <Text style={styles.time}>{time}</Text>}
        {
        !!Count && (
            <View style={styles.messagecountcontainer}>
                <Text style={styles.messagecount}>{Count}</Text>
            </View>
            )
        }
        {rightIcon}
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  Button:{
    flexDirection: 'row',
    paddingHorizontal: scale(20),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(15),

  },
  image:{
    height: moderateScale(53),
    width: moderateScale(53),
    borderRadius: moderateScale(53),
  },
  name: {
    fontWeight: 'bold',
    fontSize: moderateScale(14),
    color:'#000',
  },
  message:{
    fontWeight: '500',
    fontSize: moderateScale(13),
    color:'#889095',
  },
  time:{
    fontWeight: 'bold',
    fontSize: moderateScale(12),
    color:'#998E8E',
  },
  messagecountcontainer:{
    backgroundColor: '#036A01',
    height: moderateScale(22),
    width: moderateScale(22),
    borderRadius: moderateScale(22),
    alignItems: 'center',
    justifyContent: 'center',
  },
  messagecount:{
    fontSize: moderateScale(12),
    color:'#fff',
  },
  left_container:{
    flexDirection: 'row',
    gap: scale(10),
    alignItems: 'center',
  },
  right_container: {
    alignItems: 'flex-end',
    gap: verticalScale(7),
  },
  flexrow:{
    flexDirection: 'row',
    alignItems: "center",
    gap: scale(7),
  },
})
export default MessageCard;