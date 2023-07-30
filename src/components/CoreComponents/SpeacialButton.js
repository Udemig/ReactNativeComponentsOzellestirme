import {Alert, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const SpeacialButton = ({title, onPress = () => Alert.alert(title), style,backgroundColor}) => {
  return (
    <TouchableOpacity
    className='rounded-lg'
      onPress={onPress}

      //style aynı zamanda bir dizi şekilden verilebilir style={[{birinci stil},{ikinci stil}]}
      style={[
        {
          backgroundColor: backgroundColor ? backgroundColor : 'orange',
          margin: 5,
          padding: 5,
          paddingVertical: 8,
          maxWidth: 130,
        },
       style,
      ]}>
      <Text className="text-2xl text-black dark:text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default SpeacialButton;
