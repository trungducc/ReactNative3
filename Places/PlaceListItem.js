import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';

class PlaceListItem extends Component {
  state = {}
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.container}>
          <Image
            style={styles.image}
            resizeMode='contain'
            source={this.props.place.icon} />
          <View style={styles.rightView}>
            <Text style={styles.title}>{this.props.place.title}</Text>
            <Text style={styles.address}>{this.props.place.address}</Text>
            <View style={styles.bottomView}>
              <View style={styles.star}>
                {Array.from(new Array(this.props.place.star)).map(item =>
                  <View style={{ flex: 0.2, height: 5, backgroundColor: 'green', margin: 1 }}></View>
                )}
              </View>
              <Text style={styles.type}>{this.props.place.type}</Text>
              <Text style={styles.distance}>{this.props.place.distance}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.underLine} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 90,
    padding: 5,
    backgroundColor: 'white'
  },
  image: {
    height: 50,
    width: 50,
    margin: 10
  },
  rightView: {
    flex: 1,
    marginLeft: 5
  },
  title: {
    fontSize: 15,
    margin: 4
  },
  address: {
    fontSize: 13,
    margin: 4
  },
  bottomView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  star: {
    flex: 0.3,
    marginLeft: 4,
    flexDirection: 'row'
  },
  type: {
    fontSize: 12,
  },
  distance: {
    fontSize: 12,
  },
  underLine: {
    height: 0.5,
    backgroundColor: 'gray'
  }
})

export default PlaceListItem;