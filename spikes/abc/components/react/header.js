
import React, {
    Component,
    Text
} from 'react-native';


class Header extends Component {

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
                <Text>
                    Header
                </Text>
        );
    }
}


export default Header;
