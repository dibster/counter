import React, {Component, View} from 'react-native';

// import Header from './header.js';
// import Footer from './footer.js';
import List from './list.js';

import TabBarExample from './tabmenu.js';



class Home extends Component {

    constructor(props) {
        console.log('in contructor');
        super(props);
        this.state = {
            count: 4
        };
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        console.log('in render');
        return (
            <View>
                <List/>
                <TabBarExample/>
            </View>

        );
    }
}

export default Home;
