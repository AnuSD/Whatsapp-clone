import { View, Text, FlatList} from 'react-native'
import React from 'react';
import MessageCard from './MessageCard';
import imagepath from '@/src/constants/imagepath';

const Chat = () => {
  const data = [
    {
      image: imagepath.sushil,
      name:"sushil",
      message:"How are you?",
      time:"5:27 am",
      messageCount:1,
    },
    {
      image: imagepath.mummy,
      name:"mummy",
      message:"Hii",
      time:"5:07 am",
      messageCount:3,
    },
    {
      image: imagepath.Santo,
      name:"Santo",
      message:"Heyy",
      time:"4 am",
      messageCount:0,
    },
    {
      image: imagepath.shubhangi,
      name:"shubhangi",
      message:"are you serious?",
      time:"5:00 am",
      messageCount:1,
    },
    {
      image: imagepath.santy,
      name:"santy",
      message:"are you serious?",
      time:"5:27 am",
      messageCount:0,
    },
    {
      image: imagepath.dad,
      name:"dad",
      message:"are you serious?",
      time:"5:27 am",
      messageCount:0,
    },
    {
      image: imagepath.shubhya,
      name:"shubhya",
      message:"are you serious?",
      time:"5:27 am",
      messageCount:4,
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
                    time={item?.time} 
                    Count={item?.messageCount} 
                    />;
         }}/>
    </View>
  )
}

export default Chat;