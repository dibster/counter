const React = require('react-native');

const {
  StyleSheet,
  TouchableHighlight,
  View,
  Text
} = React;


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
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let initialPosition = JSON.stringify(position);
        console.log('geo : ' + initialPosition);
        this.setState({initialPosition});
    },
    (error) => console.log(error.message),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
   );

   this.watchID = navigator.geolocation.watchPosition((position) => {
     let lastPosition = JSON.stringify(position);
     console.log('last position', lastPosition);
     this.setState({lastPosition});
   });
  }

  render() {
    console.log('In touchable Button');
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{'Position: ' + this.state.lastPosition}</Text>
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
