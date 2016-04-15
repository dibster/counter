const React = require('react-native');

const {
  View,
  StyleSheet,
  TextInput,
  Text
} = React;

const UpButton = require('./upButton');


class Main extends React.Component {

  constructor(props, context) {
    super(props, context);
    console.log('set state');
    this.state = {
      zip: '....'
    };
    this._handleTextChange = this._handleTextChange.bind(this);
  }

  _handleTextChange(event) {
    console.log(event.nativeEvent.text); // this is undefined
    this.setState({zip: event.nativeEvent.text});
  }

  render() {
    console.log('In Main');
    return (
      <View style={styles.container}>
        <TextInput
            style={styles.input}
            onSubmitEditing={this._handleTextChange}

        />
        <Text style={styles.welcome}>
          Welcome to Counter build by ash!
          {this.state.zip}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <UpButton/>
      </View>
  );
  }
}

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  },
  input: {
    fontSize: 28,
    borderWidth: 2,
    height : 40
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30
  },
  zipContainer: {
    flex: 1,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  zipCode: {
    width: 50,
    height: baseFontSize
  },
  mainText: {
    flex: 1,
    fontSize: baseFontSize,
    color: '#FFFFFF'
  }
});

module.exports = Main;
