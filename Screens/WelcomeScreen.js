import * as React from 'react';
import {
  Button,
  View,
  Text,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from 'react-native';


export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/welcomelogo.png')}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.text} >Welcome</Text>
        <Button
          title="Start"
          color="#222222"
          accessibilityLabel="Press button to start"
          onPress={() => navigation.navigate('Sign')}
        />
      </ImageBackground>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    
  },
  image: {
    flex: 1,
    justifyContent: "center",
    
  },
  text: {
    flex: 1,
    color: "white",
    fontSize: 40,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
       
  },
  
});
