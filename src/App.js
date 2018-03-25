import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Constants } from 'expo';

// FUNCTIONAL
import { JourneyManager } from './Containers/JourneyManager';


export default class App extends React.Component {
  render() {
    return (
      <View id={'webRoot'} style={[ styles.container, {paddingTop: Constants.statusBarHeight} ]}>
        <JourneyManager/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
