import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Header() {

  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Home' as never , {} as never);
  } 

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../logo1.png')} />
        <Text style={styles.text}>Desmatamento Brasil</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#749E1A',
    height: 90 ,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'center'

  },
  text: {
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: 25,
      letterSpacing: -0.24,
      color: '#FFF',
      marginLeft: -80,
      marginTop: -10
  },
  image: {
    marginRight: 100,
    marginTop: -20
  }
});
