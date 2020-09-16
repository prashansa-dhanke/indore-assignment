/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import themeReducers from './src/store/reducers/theme';
import AppNavigator from './src/navigation/AppNavigator';
import HomeScreen from './src/screens/HomeScreen';



const rootReducer = combineReducers({
  theme: themeReducers
});

const store = createStore(rootReducer);



const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>


    // <Provider store={store}>
    //   <HomeScreen />
    // </Provider>

  );
};



export default App;
