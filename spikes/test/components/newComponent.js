/**
 * Simple Component
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';


class NewComponent extends Component {
  render() {
    return (
        <Text style={styles.welcome}>
          New Component here
        </Text>
    );
  }
}

AppRegistry.registerComponent('NewComponent', () => NewComponent);
