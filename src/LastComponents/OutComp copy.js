import {View, Text, Button, TouchableOpacity} from 'react-native';

function OutComp() {
  return (
    <View>
      {/*Button elementi Her iki platformunda kendi özelliğinde buton yapısını kullanır*/}
      <Button title="Native Button" />
      {/* TouchableOpacity ise Sarmaladığı  elemnte basılabilirlik kazandırır. View ile tek farkı budur  */}
      <TouchableOpacity
        style={{
          paddingHorizontal: 4,
          paddingVertical: 8,
          maxWidth: 100,
          backgroundColor: 'orange',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Özel Buton</Text>
      </TouchableOpacity>
    </View>
  );
}

export default OutComp;
