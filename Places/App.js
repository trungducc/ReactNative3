import React, {Component} from 'react';
import {
  Image,
} from 'react-native';

import { createStackNavigator } from 'react-navigation';

import PlaceListScreen from './PlaceListScreen.js';

console.disableYellowBox = true;

const Navigation = createStackNavigator({
  PlaceList: {
    screen: PlaceListScreen,
    navigationOptions: ({navigation}) => (
      {
        title: 'Places',
        headerRight: <Image style={{height: 25, width: 25, marginRight: 10}} source={require('./resources/btn-menu.png')} />,
        headerLeft: <Image style={{height: 30, width: 40, marginLeft: 10}} source={require('./resources/btn-back.png')} />
      }
    )
  }
})

export default class App extends Component {
  render() {
    return (
      <Navigation/>
    );
  }
}
