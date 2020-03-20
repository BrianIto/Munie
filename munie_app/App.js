import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import IndexPage from './src/pages';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import Store from './src/redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{header: () => <></>}}
          initialRouteName={'Index'}>
          <Stack.Screen name={'Index'} component={IndexPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#000',
  },
});

export default App;
