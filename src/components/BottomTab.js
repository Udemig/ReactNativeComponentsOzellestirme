import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import SpeacialButton from './CoreComponents/SpeacialButton';
import {DataContext} from '../context/Data';

const BottomTab = () => {
  const {setIndex} = useContext(DataContext);
  return (
    <View
      className="bg-red-700 items-center justify-between flex-row px-2"
      style={{flex: 1}}>
      <SpeacialButton onPress={() => setIndex(0)} title={'Ana Sayfa'} />
      <SpeacialButton onPress={() => setIndex(1)} title={'Profil'} />
      <SpeacialButton onPress={() => setIndex(2)} title={'Ayarlar'} />
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
