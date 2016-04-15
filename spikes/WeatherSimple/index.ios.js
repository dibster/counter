/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
const React = require('react-native');

const Main = require('./App/Components/main');

const {AppRegistry, Component, Navigator} = React;

//const Main = require('./App/Components/main')

class WeatherSimple extends Component {
  render() {
    console.log('In Render');
    return (
        <Navigator initialRoute={{
          name: 'Main',
          index: 0
        }} renderScene={(route, navigator) =>
            <Main name={route.name}
                onForward={() => {
                  let nextIndex = route.index + 1;
                  navigator.push({
                    name: 'Scene ' + nextIndex,
                    index: nextIndex
                  });

                }} onBack={() => {
                  if (route.index > 0) {
                    navigator.pop();
                  }
                }}
            />}
        />

    );
  }
}

AppRegistry.registerComponent('WeatherSimple', () => WeatherSimple);
