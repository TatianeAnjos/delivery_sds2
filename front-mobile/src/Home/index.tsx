import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Header from '../Header';

export default function Home() {

  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Filtro' as never , {} as never);
  } 

  return (
    <>
    <Header />
    <View style={styles.container}>
      <Image source={require('../home3.png')}/>
      <Text style={styles.title} >Consulte dados em {'\n'} tempo real</Text>
      <Text style={styles.subTitle} >Tenha acesso aos dados que você precisa {'\n'} com apenas um clique</Text>
    </View>
    <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleOnPress}>
            <Text style={styles.buttonText}>Começar agora</Text>
        </RectButton>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
        container: {
          marginTop: '15%',
          alignItems: 'center'
        },
        title: {
          color: '#263238',
          fontSize: 26,
          lineHeight: 35,
          fontWeight: 'bold',
          marginTop: 31,
          textAlign: 'center'
        },
        subTitle: {
          color: '#9E9E9E',
          fontSize: 16,
          marginTop: 15,
          lineHeight: 22,
          textAlign: 'center'
        },
        footer: {
          marginTop: '5%',
          alignItems: 'center'
        },
        button: {
          backgroundColor : '#749E1A', 
          flexDirection: 'row',
          borderRadius: 10
        },
        buttonText: {
          paddingTop: 15,
          paddingBottom: 15,
          paddingLeft: 50,
          paddingRight: 50,
          fontWeight: 'bold',
          fontSize: 18,
          color: '#FFF',
          letterSpacing: -0.24
        }
      
});
