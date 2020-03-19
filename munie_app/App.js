import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import IndexPage from './src/pages';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: () => <></>}} initialRouteName={'Index'}>
        <Stack.Screen name={'Index'} component={IndexPage} />
      </Stack.Navigator>
    </NavigationContainer>
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
