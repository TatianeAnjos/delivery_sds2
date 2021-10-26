import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Alert, Text, TextInput} from 'react-native';
import { RectButton, State, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchPesquisa } from '../api';
import Header from '../Header';
import PesquisaCard from '../PesquisaCard';
import { filtroPesquisa, tipoPesquisa } from '../types';

export default function Pesquisa() {
const [listaPesquisa, setlistaPesquisa] =  useState<tipoPesquisa[]>([]);
const [isLoading, setIsLoading] = useState(false);
const [filtroUF, setFiltroUf] = useState<filtroPesquisa>();
const navigation = useNavigation();

const handleOnPress = () => {
  navigation.navigate('Pesquisa' as never, {} as never),
  console.log(filtroUF);
} 

 return (
    <>
      <Header />
      <Text style={styles.textFiltro}>UF: </Text>
      <TextInput style={styles.filtroCont}  
                  placeholder="Digite a UF"
                  onChangeText={vlFiltro => setFiltroUf({"ano":vlFiltro,"uf":'AM'})}></TextInput>
      <Text style={styles.textFiltro}>ANO: </Text>
      
      <TextInput style={styles.filtroCont} placeholder="Digite o Ano"></TextInput>
      <RectButton style={styles.text} onPress={() => {navigation.navigate('Pesquisa' as never , {} as never)}}>
            <Text style={styles.textFiltrar}>FILTRAR</Text>
        </RectButton>
    </>
  );
}

const styles = StyleSheet.create({
  container : {
    paddingRight: '5%',
    paddingLeft: '5%'
  },
    container1: {
      marginTop: '0%',
      marginLeft: '2%',
      marginRight: '2%',
      marginBottom: '2%',
      padding: 15,
      backgroundColor: '#FFF',
      shadowOpacity: 0.25,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 0,
      borderRadius: 0,
      elevation: 5
    },
    header: {
      marginTop: '5%',
      marginLeft: '2%',
      marginRight: '2%',
      marginBottom: '2%',
      padding: 15,
      backgroundColor: '#C5DB96',
      shadowOpacity: 0.25,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 0,
      borderRadius: 0,
      elevation: 5,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    text: {
      fontWeight: 'bold',
      paddingTop:10,
      paddingLeft: 50,
      paddingRight:50,
      fontSize: 20,
      lineHeight: 19,
      letterSpacing: -0.24,
      color: '#9E9E9E'},
      textFiltrar: {
        backgroundColor: '#749E1A',
        fontWeight: 'bold',
        paddingTop:10,
        paddingLeft: 10,
        paddingBottom: 10,
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 19,
        letterSpacing: -0.24,
        color: '#FFF',
        shadowOpacity: 0.25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
        borderRadius: 50,
        elevation: 10},
    orderName: {
      fontWeight: 'bold',
      fontSize: 14,
      lineHeight: 25,
      letterSpacing: -0.24,
      color: '#263238',
      paddingLeft: 20
    },
    orderPrice: {
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: 25,
      textAlign: 'right',
      letterSpacing: -0.24,
      color: '#DA5C5C'
    },
    productsList: {
      borderTopColor: '#E6E6E6',
      borderTopWidth: 1,
      marginTop: 20,
      paddingTop: 15
    },
    filtroCont: {
      marginTop: '0%',
      marginLeft: '2%',
      marginRight: '2%',
      marginBottom: '2%',
      padding: 5,
      backgroundColor: '#E9F1EC',
      shadowOpacity: 0.25,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 10,
      borderRadius: 0,
      elevation: 5,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    textFiltro: {
      fontWeight: 'bold',
      paddingTop:0,
      paddingLeft: 10,
      fontSize: 14,
      lineHeight: 19,
      letterSpacing: -0.24,
      flexDirection: 'row',
      color: '#000'}
});
