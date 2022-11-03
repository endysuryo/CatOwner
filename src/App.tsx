import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Details from './screens/Details';
import {createGlobalState} from 'react-hooks-global-state';

const Stack = createNativeStackNavigator();

const initialState = {
  master: {
    id: '1',
    avatar: 'JL',
    name: 'Jhon Lenon',
    is_favorite: true,
  },
  owner: [
    {
      id: '1',
      avatar: 'JL',
      name: 'Jhon Lenon',
      is_favorite: true,
      cats: [
        {
          name: 'Snowball',
          age: '4 years 0 month',
        },
        {
          name: 'Blackly',
          age: '2 years 3 month',
        },
        {
          name: 'Snowball 2',
          age: '4 years 0 month',
        },
        {
          name: 'Blackly3',
          age: '2 years 3 month',
        },
        {
          name: 'Snowballdsad',
          age: '4 years 0 month',
        },
        {
          name: 'Blacklydsadsa',
          age: '2 years 3 month',
        },
      ],
    },
    {
      id: '2',
      avatar: 'PM',
      name: 'Paul McCartney',
      is_favorite: false,
      cats: [
        {
          name: 'Snowball',
          age: '4 years 0 month',
        },
        {
          name: 'Blackly',
          age: '2 years 3 month',
        },
        {
          name: 'Milky',
          age: '1 years 2 month',
        },
      ],
    },
    {
      id: '3',
      avatar: 'GH',
      name: 'Georgia Harrison',
      is_favorite: false,
      cats: [
        {
          name: 'Snowball',
          age: '4 years 0 month',
        },
        {
          name: 'Blackly',
          age: '2 years 3 month',
        },
      ],
    },
    {
      id: '4',
      avatar: 'RS',
      name: 'Ringo Starr',
      is_favorite: false,
      cats: [],
    },
  ],
};

export const {useGlobalState} = createGlobalState(initialState);

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
