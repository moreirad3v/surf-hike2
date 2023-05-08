import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Touchable } from 'react-native';

export default function Welcome() {
 return (
   <View style= {styles.container}>
    
    <View style={styles.containerLogo}>
      <Image
       source={require('../../assets/logo.png')}
       style={{width: '60%'}}
       resize="contain"
      />
   </View>
   
    <View style={styles.containerForms}>
      <Text style={styles.title}> frase APP </Text>
      <Text style={styles.Text}> Crie uma conta e bora surfar </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Acessar </Text>
      </TouchableOpacity>
    


      </View>




  </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#00ffff',
  },
  containerLogo:{
    flex: 2,
    backgroundColor: '#00ffff',
    justifyContent: 'center',
    alignItems: 'center',

    
  },
  Text:{
    color: '#a1a1a1',
  },
  containerForms:{
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom:12,
  },
  button:{
    position: 'absolute',
    backgroundColor: '#00ffff',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonText:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },



})