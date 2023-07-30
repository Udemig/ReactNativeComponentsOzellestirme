import {

  SafeAreaView,

} from 'react-native';
import OutComp from './src/LastComponents/OutComp';
import { DataProvider } from './src/context/Data';

const App = () => {
  //App compnenti bizim çıkış yai root componentimizidr burda genelde navigasyon yapısı veya proje isterine göre başka temel yapı başlatılır
  return (
    <SafeAreaView style={{flex:1}}>
<DataProvider>
  <OutComp/>
</DataProvider>
    </SafeAreaView>
  );
};

export default App;
