
import AddCounter from './components/ui/addCounter.js';
import styles from './components/ui/styles.js';
import React, {
    Component
} from 'react';

import {
    AppRegistry,
    View
} from 'react-native';

// import db from './components/db/schema.js';



class material extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AddCounter/>
            </View>
        );
    }
}


AppRegistry.registerComponent('material', () => material);
