import React, {Component, ListView, View, Text, TextInput} from 'react-native';

import NativeStore from '../data/nativestore.js';

import styles from '../styles/styles.js';

import CountListItem from './listitem.js';
import AddCount from './addCount.js';

let currentState = {};

class List extends Component {

    constructor(props) {
        console.log('in list constructor ...');
        super(props);
        currentState.isLoading = true;
        this.state = currentState;
        console.log('constructor state', this.state);

    }

    componentDidMount() {
        this.fetchData().done();
    }

    async fetchData() {
        let model = new NativeStore();
        const resp = await model.read();
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        currentState.dataSource =  ds.cloneWithRows(resp);
        currentState.db =  resp;
        currentState.isLoading = false;
        this.setState(currentState);
        console.log('db is ', this.state);


    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        });
    }

    _renderHeader() {
        return (
            <View style={styles.sectionDivider}>
                <Text style={styles.headingText}>
                Counter
                </Text>
            </View>
        );
    }

    _renderRow(rowData) {
        console.log('in render' , this.state);
        return (
            <CountListItem
                name={rowData.name}
                value={rowData.value}
            />
        );
    }


    _renderFooter() {
        return(
            <View style={styles.sectionDivider}>
                <Text>Last Updated today at 12:30</Text>
            </View>
         );
    }



    render() {
        console.log('in render', this.state);

        if (this.state.isLoading) {
            return (
            <View>
                <Text>Loading </Text>
            </View>
        )
        }

        return (


            <View>
            <AddCount/>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                renderHeader = {this._renderHeader}
                renderFooter = {this._renderFooter}
            />


        </View>);
    }
}

export default List;

// let ds = new ListView.DataSource({
//                 rowHasChanged: (r1, r2) => r1 !== r2
//             });
//             this.state = {dataSource: ds.cloneWithRows(resp),
//                           db: resp,
//                            uc1 : 'Joe'};
//             console.log('db is ', this.state);
//             this.state.isLoading = false;
