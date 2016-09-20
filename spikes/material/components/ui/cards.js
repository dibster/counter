import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';

import {
  MKButton,
  MKColor,
  MKIconToggle,
  getTheme,
} from 'react-native-material-kit';

const theme = getTheme();
const styles = require('./styles');

const UpButton = MKButton.coloredButton()
  .withText('+')
  .withOnPress(() => {
    console.log("Hi, it's a colored button!");
  })
  .build();

const DownButton = MKButton.coloredButton()
  .withText('-')
  .withOnPress(() => {
    console.log("Hi, it's a colored button!");
  })
  .build();


const Cards = React.createClass({
  render(){
    var action = (<Text> My action</Text>);


    var up = (
       <MKIconToggle
        checked={true}
        onCheckedChange={this._onIconChecked}
        onPress={this._onIconClicked}
        >
        <Text pointerEvents="none"
              style={styles.toggleTextOff}>Up</Text>
        <Text state_checked={true}
              pointerEvents="none"
              style={[styles.toggleText, styles.toggleTextOn]}>Up</Text>
      </MKIconToggle>
    );
    var down = (
       <MKIconToggle
        checked={true}
        onCheckedChange={this._onIconChecked}
        onPress={this._onIconClicked}
        >
        <Text pointerEvents="none"
              style={styles.toggleTextOff}>Down</Text>
        <Text state_checked={true}
              pointerEvents="none"
              style={[styles.toggleText, styles.toggleTextOn]}>Down</Text>
      </MKIconToggle>
    );
    return (
        <View style={styles.container}>
            <Text>Top</Text>

      <ScrollView style={styles.scrollView}>

        <View style={styles.container}>
        {/* Here the magic happens*/}
          <View style={theme.cardStyle}>

            <View  // TextView padding not handled well on Android https://github.com/facebook/react-native/issues/3233
              style={{
                padding : 15,
              }}
              >
              <Text style={[theme.cardContentStyle], {fontSize:18,textAlign: 'center', color : 'grey'}}>Swim</Text>
              <Text style={[theme.cardContentStyle], {fontSize:36,textAlign : 'center'}}>34</Text>
              <DownButton/>
              <UpButton/>
            </View>
            <View style={[theme.cardActionStyle]}>

            </View>
          </View>
        </View>
      </ScrollView>
          </View>
    )
  }
});

module.exports = Cards;
