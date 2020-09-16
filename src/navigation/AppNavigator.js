import React from 'react';
import MainTabScreen from './MainTabScreen';
import { NavigationContainer } from '@react-navigation/native';


const AppNavigator = props => {
    return (
        <NavigationContainer>
            <MainTabScreen />
        </NavigationContainer>
    )
}


export default AppNavigator;
