
import React, {
    AppRegistry,
    Component
} from 'react-native';

import Home from './components/react/home.js';

class abc extends Component {
    render() {
        return (
          <Home/>
        );
    }
}


AppRegistry.registerComponent('abc', () => abc);
