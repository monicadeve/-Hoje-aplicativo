import { StatusBar } from 'expo-status-bar';
import {Card} from '../Components/Card'
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import {CardComponent} from '../Components/Card';

const data=[
  {nome: 'Monica', tipoSanguineo: 'AB+', id:1}
]

export default function Home() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
        data={data}
        renderItem={({item})=> <CardComponent nome={item.nome} tipoSanguineo={item.tipoSanguineo} /> }
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
