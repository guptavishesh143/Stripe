import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import CardFormScreen from './scenes/CardFormScreen';
import stripe from 'tipsi-stripe';
stripe.setOptions({
  publishablekey:
    'pk_test_51I9mNxJLyDwdU00vtTCSRCZwklRXCe9ZmUIkfASbeUkdr6J583lo9fS0z5wmMG84drNTMUDrlRBsd1K30CbzFH2y00jH98SrLp',
});



const App = () => {
  return (
    <>
      <SafeAreaView style={{backgroundColor:'green'}}>
        <View style={{alignSelf:'center',padding:20}}>
        <CardFormScreen />
        </View>
        
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
