import React, {Component} from 'react';
import {
  FlatList
} from 'react-native';

import PlaceListItem from './PlaceListItem.js';

const places = [
  {
    title: 'MC Donals',
    address: '691 Romaguera Ville Apt. 094',
    star: 3,
    type: 'Restaurant',
    distance: '0,2 mile',
    icon: require('./resources/mc-donalds.png')
  },
  {
    title: 'Dunkin Donuts',
    address: '999 Berge Parkway Suite 599',
    star: 2,
    type: 'Patisserie',
    distance: '0,5 mile',
    icon: require('./resources/dunkin-donuts.png')
  },
  {
    title: 'Pizza Hut',
    address: '190 Jessyca Ranch Apt. 617',
    star: 4,
    type: 'Fast food',
    distance: '1 mile',
    icon: require('./resources/pizza-hut.png')
  },
  {
    title: 'Taco Bell',
    address: '49 Ramon Garden Apt. 143',
    star: 4,
    type: 'Restaurant',
    distance: '2 mile',
    icon: require('./resources/taco-bell.png')
  },
  {
    title: 'Kentucky Fried Chicken',
    address: '5617 GiuseppeInlet',
    star: 4,
    type: 'Fast food',
    distance: '2,2 mile',
    icon: require('./resources/kentucky-fried-chicken.png')
  }
]

class PlaceListScreen extends Component {
  renderItem = ({item}) => <PlaceListItem place={item} />

  keyExtractor = (item, index) => item.title

  render() {
    return (
      <FlatList
        data={places}
        renderItem={this.renderItem}
        numColumns='1'
        keyExtractor={this.keyExtractor}
      />
    );
  }
}



export default PlaceListScreen;