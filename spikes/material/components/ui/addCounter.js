import styles from './styles';

import React, {
    Component
} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {
    MKButton,
    MKColor,
    MKTextField,
    MKIconToggle,
    getTheme,
} from 'react-native-material-kit';


class AddCounter extends Component {

    constructor(props) {
        console.log('in Header constructor ...');
        super(props);
        console.log('constructor state', this.state);

    }

    addNewCount() {
        console.log('Adding Count', this.state);
    }

    render() {
        console.log('in render', this.state);

        let AddCountButton = MKButton.coloredButton()
            .withText('Add Counter')
            .withOnPress(() => {
                this.addNewCount();
            })
            .build();

        return (
            <View style={styles.container}>
                <View>
                <MKTextField
                    tintColor={MKColor.Lime}
                    textInputStyle={{color: MKColor.Orange}}
                    placeholder='Counter'
                    onChangeText={(Counter) => this.setState({Counter})}
                    style={styles.textfield}
                    />
                <MKTextField
                    tintColor={MKColor.Lime}
                    textInputStyle={{color: MKColor.Orange}}
                    placeholder='1'
                    onChangeText={(Value) => this.setState({Value})}
                    style={styles.textfield}
                    />
                </View>

                <View style={styles.container}>
                    <AddCountButton/>
                </View>

            </View>
        )}

    }

    export default AddCounter;
