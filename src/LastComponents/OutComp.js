import {View, Text, Button, TouchableOpacity, Alert} from 'react-native';
import SpeacialButton from '../components/CoreComponents/SpeacialButton';
import BottomTab from '../components/BottomTab';
import {useContext} from 'react';
import {DataContext} from '../context/Data';

function OutComp() {
  const {index} = useContext(DataContext);
  return (
    <View className="flex-1 bg-amber-400">
      {/*Header*/}

      <View className="bg-amber-700" style={{flex: 1}}>
        <Text>Header</Text>
      </View>

      {/*Body*/}

      <View
        className={`items-center justify-center ${
          index === 0
            ? 'bg-rose-400'
            : index === 1
            ? 'bg-amber-300'
            : index === 2
            ? 'bg-blue-700'
            : 'bg-red-700'
        }`}
        style={{flex: 15}}>
        {/*Indexin durumuna göre orta kısmı değşitiryor*/}
        {index === 0 ? (
          <Text>Ana Sayfa</Text>
        ) : index === 1 ? (
          <Text>Profile</Text>
        ) : index === 2 ? (
          <Text>Ayarlar</Text>
        ) : (
          <Text>Ekran yok</Text>
        )}
      </View>

      {/*Bottom Bar*/}

      <View style={{flex: 2}}>
        <BottomTab />
      </View>
    </View>
  );
}

export default OutComp;
