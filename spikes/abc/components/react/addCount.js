import React, {Component,  View, TextInput} from 'react-native';

import NativeStore from '../data/nativestore.js';

import styles from '../styles/styles.js';

import Button from 'react-native-button';

let currentState = {};

class AddCount extends Component {

    constructor(props) {
        console.log('in list constructor ...');
        super(props);
        currentState.isLoading = true;
        this.state = currentState;
        console.log('constructor state', this.state);

    }

    _addCount(value) {
        console.log('add count', value);
        let model = new NativeStore();
         model.add(value);


    }



    render() {
        console.log('in render', this.state);
        return (
            <View>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />

            <Button
                style={{borderWidth: 1, borderColor: 'blue'}}
                onPress={this._addCount(this.state.text)}>
                Add
                </Button>

            </View>
        );
    }
}

export default AddCount;
