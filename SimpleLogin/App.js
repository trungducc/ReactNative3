import React, { Component } from 'react';
import {
  Alert,
  TextInput,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  loginButtonDidTouch = () => {
    const alertTitle = this.state.username === 'admin' && this.state.username === 'admin' ? 'Login success' : 'Login fail';

    Alert.alert(
      alertTitle,
      '',
      [
        { text: 'OK' },
      ]
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>
            Simple Login
        </Text>
          <TextInput
            style={styles.textField}
            placeholder='Username'
            value={this.state.username}
            autoCapitalize='none'
            onChangeText={(text) => this.setState({ username: text })}
          />
          <TextInput
            style={styles.textField}
            placeholder='Password'
            value={this.state.password}
            autoCapitalize='none'
            onChangeText={(text) => this.setState({ password: text })}
          />
          <Button
            onPress={this.loginButtonDidTouch}
            title='LOG IN'
            color='#000000'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  content: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
    marginBottom: 16
  },
  textField: {
    alignSelf: 'stretch',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginHorizontal: 24,
    marginVertical: 8
  },
});
