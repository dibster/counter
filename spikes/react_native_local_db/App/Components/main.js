const React = require('react-native');

const {
  View,
  StyleSheet,
  Text
} = React;


class Main extends React.Component {

  render() {
    console.log('In Main');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Counter build by dib!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});


module.exports = Main;
