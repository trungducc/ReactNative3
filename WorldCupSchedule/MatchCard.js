import React, { Component } from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class MatchCard extends Component {
  render() {
    return (
      <View style={styles.matchCardView}>
        <View style={styles.startTimeContainerView}>
          <Text style={styles.startTimeText}>
            {this.props.match.startTime}
          </Text>
        </View>
        <View style={styles.countriesContainerView}>
          <Text style={styles.countryText}>
            {this.props.match.lhs.country}
          </Text>
          <View style={styles.flagsView}>
            <Image style={styles.flagImage}
              resizeMode='stretch'
              source={this.props.match.lhs.flagImage}
            />
            <Image style={styles.flagImage}
              resizeMode='stretch'
              source={this.props.match.rhs.flagImage}
            />
          </View>
          <Text style={styles.countryText}>
            {this.props.match.rhs.country}
          </Text>
        </View>
      </View>
    );
  }
}

const widdow = Dimensions.get('window');
const windowWidth = Math.min(widdow.width, widdow.height);
const cardViewWidth = windowWidth * 0.88;
const fontWeight = (Platform.OS === 'ios') ? '600' : '400';

const styles = StyleSheet.create({
  matchCardView: {
    backgroundColor: '#3e465a',
    width: cardViewWidth,
    height: cardViewWidth * 0.225,
    margin: cardViewWidth * 0.024,
    borderRadius: cardViewWidth * 0.018,
    alignItems: 'center',
  },
  startTimeContainerView: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startTimeText: {
    fontSize: windowWidth * 0.03,
    fontWeight: fontWeight,
    color: '#ffffff',
  },
  countriesContainerView: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryText: {
    flex: 0.385,
    textAlign: 'center',
    fontSize: cardViewWidth * 0.043,
    fontWeight: fontWeight,
    color: '#ffffff',
  },
  flagsView: {
    flex: 0.23,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flagImage: {
    width: cardViewWidth * 0.058,
    height: cardViewWidth * 0.07,
    borderRadius: cardViewWidth * 0.02,
  }
});

export default MatchCard;