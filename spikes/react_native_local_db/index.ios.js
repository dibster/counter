/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
const React = require('react-native')

const {
  AppRegistry,
  Component,
  Navigator,
}  = React

const Main = require('./App/Components/main')


class react_native_local_db extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{
            title : 'Counter',
            component: Main,
          }}
      />


    )
  }
}


AppRegistry.registerComponent('react_native_local_db', () => react_native_local_db)
