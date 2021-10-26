import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Header from '../Header';
import { tipoPesquisa } from '../types';


type Props = {
  pesquisa: tipoPesquisa;
}

export default function PesquisaCard({pesquisa}:Props) {

  return (
    <>
    <View style={styles.container}>
      <>      
      <View style={styles.header}>
        <Text style={styles.text}>{pesquisa.id}</Text>
        <Text style={styles.text}>{pesquisa.ano}</Text>
        <Text style={styles.text}>{pesquisa.uf}</Text>
        <Text style={styles.text}>{pesquisa.areaMetros}</Text>
        <Text style={styles.text}>{pesquisa.areaForma}</Text>
      </View>
      
      </>
      <View style={styles.header}>
        
      </View>
      
    </View>
    </>
  );
}

const styles = StyleSheet.create(
  {
    container: {
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
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    text: {
      fontWeight: 'bold',
      fontSize: 14,
      lineHeight: 19,
      letterSpacing: -0.24,
      color: '#9E9E9E'}
    });
