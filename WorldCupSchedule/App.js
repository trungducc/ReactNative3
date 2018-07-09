import React, { Component } from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import MatchCard from './MatchCard.js'

const matches = [
  {
    uid: 'uruguay_france',
    startTime: 'Jul 6 2018 - 21:00',
    lhs: {
      country: 'Uruguay',
      flagImage: require('./resources/uruguay_flag.png')
    },
    rhs: {
      country: 'France',
      flagImage: require('./resources/france_flag.png')
    }
  },
  {
    uid: 'brazil_belgium',
    startTime: 'Jul 7 2018 - 01:00',
    lhs: {
      country: 'Brazil',
      flagImage: require('./resources/brazil_flag.png')
    },
    rhs: {
      country: 'Belgium',
      flagImage: require('./resources/belgium_flag.png')
    },
  },
  {
    uid: 'russia_croatia',
    startTime: 'Jul 8 2018 - 01:00',
    lhs: {
      country: 'Russia',
      flagImage: require('./resources/russia_flag.png')
    },
    rhs: {
      country: 'Croatia',
      flagImage: require('./resources/croatia_flag.png')
    }
  }
];

export default class App extends Component {
  render() {
    return (
      <View style={styles.containerView}>
        <View style={styles.titleView}>
          <Text style={styles.scheduleText}>
            Schedule
          </Text>
        </View>
        <View style={styles.centerView}>
          <Image style={styles.ballImage}
            resizeMode='contain'
            source={require('./resources/ball.png')}
          />
          <Text style={styles.introText}>
            FIFA WORLD CUP 2018
          </Text>
        </View>
        <View style={styles.scheduleView}>
          {matches.map((match) =>
            <MatchCard key={match.uid} match={match} />
          )}
        </View>
      </View>
    );
  }
}

const widdow = Dimensions.get('window');
const windowWidth = Math.min(widdow.width, widdow.height);
const fontWeight = (Platform.OS === 'ios') ? '600' : '400';

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#282f37',
  },
  titleView: {
    flex: 0.172,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scheduleText: {
    flex: 0.43,
    fontSize: windowWidth * 0.077,
    color: '#ffffff',
  },
  centerView: {
    flex: 0.212,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ballImage: {
    flex: 0.87,
  },
  introText: {
    fontSize: windowWidth * 0.045,
    fontWeight: fontWeight,
    color: '#FFFFFF',
  },
  scheduleView: {
    flex: 0.616,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
