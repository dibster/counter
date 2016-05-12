const React = require('react-native');

const {
  StyleSheet,
  TouchableHighlight,
  View,
  Text
} = React;

const timeAgo = require('../utils/timeAgo');
const counterDb = require('../utils/realmdbSchema');



class UpButton extends React.Component {

  constructor(props, context) {
    super(props, context);
    console.log('set state of UpButton');

    this.state = {
      score: 0
    };
    this._handleButtonPress = this._handleButtonPress.bind(this);
  }

  _handleButtonPress() {
    console.log(this.state.score); // this is undefined
    this.setState({score : ++this.state.score});
    counterDb.write(() => {
      counterDb.create('Counter', {
        counter: 'Fights',
        value: this.state.score,
        timestamp : null,
        lat : null,
        lon : null});
    });

    let counters = counterDb.objects('Counter');
    console.log('value : ',counters[1].value);
    // console.log('Counters', counters);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        let initialPosition = JSON.stringify(position);
        console.log('geo : ' + initialPosition);
        this.setState({initialPosition});
      },
    (error) => console.log('nav error',error.message),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
   );

    this.watchID = navigator.geolocation.watchPosition((position) => {
      let lastPosition = JSON.stringify(position);
      console.log('last position', lastPosition);
      this.setState({lastPosition});
      let lastTime = position.timestamp;
      this.setState({lastTime})
    });
  }

  render() {
    console.log('In touchable Button');
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{'Updated ' + this.state.lastPosition}</Text>
        <Text style={styles.label}>{'Position: ' + timeAgo(this.state.lastTime)}</Text>
        <Text style={styles.label}>{'Score: ' + this.state.score}</Text>
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor={'white'}
            onPress={this._handleButtonPress}
        >
        <Text style={styles.button}>Fights</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    color: 'blue'
  },
  label: {
    marginBottom: 30
  }
});


module.exports = UpButton;
