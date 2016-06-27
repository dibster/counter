import {
    Header,
    Title
} from 'native-base';

import React, {
    Component
} from 'react-native';


class CountHeader extends Component {

    constructor(props) {
        console.log('in header contructor');
        super(props);
        this.initHeader = this.initHeader.bind(this);
    }

    initHeader() {
        console.log('In Init Header');
        this.setState({count: this.state.count + 1});
    }

    render() {
        console.log('render header');
        return (
            <Header>
                <Title>Counter</Title>
            </Header>
        );
    }
}


export default CountHeader;
