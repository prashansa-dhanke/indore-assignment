import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';



import HomeScreen from '../screens/HomeScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import ThirdScreen from '../screens/ThirdScreen';
import ForthScreen from '../screens/ForthScreen';
import FifthScreen from '../screens/FifthScreen';
import Icon from '../components/Icons';


const MainTab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();


// this is for home screen header
const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#39d7fe',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
            title: '',
            headerLeft: () => (
                <Icon.FontAwesome5
                    name="running"
                    size={25}
                    style={{ color: '#fff', marginLeft: 20 }}
                />
            ),
            headerRight: () => (
                <Icon.Ionicons
                    name="notifications"
                    size={25}
                    style={{ color: '#fff', marginRight: 20 }}
                />
            )
        }} />
    </HomeStack.Navigator>
);



// this is for bottom tab screen 
const MainTabScreen = () => (
    <MainTab.Navigator
        initialRouteName="Home"
        activeColor="#fff">
        <MainTab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#39d7fe',
                tabBarIcon: ({ color }) => (
                    <Icon.FontAwesome5
                        name="home"
                        size={24}
                        style={{ color: '#fff' }}
                    />
                ),
            }}
        />
        <MainTab.Screen
            name="User"
            component={UserProfileScreen}
            options={{
                tabBarLabel: 'User',
                tabBarColor: '#1f65ff',
                tabBarIcon: ({ color }) => (
                    <Icon.FontAwesome
                        name="user"
                        size={24}
                        style={{ color: '#fff' }}
                    />
                ),
            }}
        />
        <MainTab.Screen
            name="Third"
            component={ThirdScreen}
            options={{
                tabBarLabel: 'Third',
                tabBarColor: '#694fad',
                tabBarIcon: ({ color }) => (
                    <Icon.Entypo
                        name="area-graph"
                        size={24}
                        style={{ color: '#fff' }}
                    />
                ),
            }}
        />
        <MainTab.Screen
            name="Four"
            component={ForthScreen}
            options={{
                tabBarLabel: 'Four',
                tabBarColor: '#d02860',
                tabBarIcon: ({ color }) => (
                    <Icon.FontAwesome5
                        name="home"
                        size={24}
                        style={{ color: '#fff' }}
                    />
                ),
            }}
        />

        <MainTab.Screen
            name="Fifth"
            component={FifthScreen}
            options={{
                tabBarLabel: 'Fifth',
                tabBarColor: '#d02860',
                tabBarIcon: ({ color }) => (
                    <Icon.EvilIcons
                        name="archive"
                        size={24}
                        style={{ color: '#fff' }}
                    />
                ),
            }}
        />
    </MainTab.Navigator>
);


export default MainTabScreen;