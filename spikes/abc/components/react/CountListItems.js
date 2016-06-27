import {
    Text,
    ListItem
} from 'native-base';

import React, {
    Component
} from 'react-native';


class CounterListItems extends Component {

    constructor(props) {
        console.log('in contructor');
        super(props);
        this.state = {count: 4};
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        console.log('in render');
        return (
            <ListItem key="1">
                <Text>
                    Count {this.state.count}
                </Text>
            </ListItem>
        );
    }
}


export default CounterListItems;
