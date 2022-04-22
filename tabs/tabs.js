import * as React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../Screens/WelcomeScreen';
import SignScreen from '../Screens/SignScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import HomeScreen from '../Screens/HomeScreen';



const Tab = createNativeStackNavigator();


export default Tabs   => {
    return(
        <Tab.Navigator screenOptions={{headerShown: false,}}>
            <Tab.Screen name = "Welcome" component={WelcomeScreen} />
            <Tab.Screen name="Sign" component={SignScreen} />
            <Tab.Screen name="SignUp" component={SignUpScreen}/>
            <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
    );
}


