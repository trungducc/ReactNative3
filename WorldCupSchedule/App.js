import React, { Component } from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

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
            <View key={match.uid} style={styles.matchCardView}>
              <View style={styles.startTimeContainerView}>
                <Text style={styles.startTimeText}>
                  {match.startTime}
                </Text>
              </View>
              <View style={styles.countriesContainerView}>
                <Text style={styles.countryText}>
                  {match.lhs.country}
                </Text>
                <View style={styles.flagsView}>
                  <Image style={styles.flagImage}
                    resizeMode='stretch'
                    source={match.lhs.flagImage}
                  />
                  <Image style={styles.flagImage}
                    resizeMode='stretch'
                    source={match.rhs.flagImage}
                  />
                </View>
                <Text style={styles.countryText}>
                  {match.rhs.country}
                </Text>
              </View>
            </View>
          )}
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
  },
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
