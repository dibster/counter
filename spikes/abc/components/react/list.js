import React, {Component, ListView, View, Text} from 'react-native';

const counts = require('../data/countData.js');

import styles from '../styles/styles.js';

import CountListItem from './listitem.js';

import NativeStore from '../data/nativestore.js';

class List extends Component {

    constructor(props) {
        console.log('in list constructor ...');
        super(props);
        const dave = new NativeStore();
        dave.loadInitialState();
        dave.saveData({counter : 'dave'});

        this.incrementCount = this.incrementCount.bind(this);

        let userCounts = counts.getCounts();

        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {dataSource: ds.cloneWithRows(userCounts)};

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
                Counters
                </Text>
            </View>
        );
    }

    _renderRow(rowData) {
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
        console.log('in render');
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                renderHeader = {this._renderHeader}
                renderFooter = {this._renderFooter}
            />);
    }
}

export default List;
