import React, {Component,  Text} from 'react-native';

import styles from '../styles/styles.js';

class CountItem extends Component {

    constructor(props) {
        console.log('in list constructor');
        super(props);
        console.log(this.props);
        this.incrementCount = this.incrementCount.bind(this);

    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        console.log('in render');
        return (<Text style={styles.row}>{this.props.value} {this.props.name}</Text>);
    }
}

export default CountItem;
