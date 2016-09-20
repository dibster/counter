const STORAGE_KEY_CURRENT_COUNTS = 'LiveCounts';
const STORAGE_KEY_HISTORICAL_COUNTS = 'OldCounts';

let currentData = [];

import React, {Component, AsyncStorage} from 'react-native';

class NativeStore {

    constructor(parms) {
        console.log('constructor parms');
    }

    async read() {
        console.log('loading...');
        try {
            const data = await AsyncStorage.getItem(STORAGE_KEY_CURRENT_COUNTS);
            console.log('value of Async data yielded is ', data);
            currentData = JSON.parse(data);
            return currentData;
        } catch (error) {
            console.error('AsyncStorage error: ' + error.message);
        }
    }

    async init() {
        console.log('initialise');

        try {
            await AsyncStorage.setItem(STORAGE_KEY_CURRENT_COUNTS, JSON.stringify(loadSampleData()));
            console.log('Initialise Data ');
        } catch (error) {
            console.error('Eror saving', error);
        }
    }

    async save(data) {
        console.log('In Save Data');

        try {
            await AsyncStorage.setItem(STORAGE_KEY_CURRENT_COUNTS, JSON.stringify(data));
            console.log('Saved selection to disk: ', data);
        } catch (error) {
            console.error('Eror saving', error);
        }
    }

    async add(count) {
        console.log('Add Count', count);
        console.log('Data', currentData);
        console.log('type', typeof currentData);
        // add record to Current Data
        // let newCounter = {};
        // newCounter.id = currentData.length + 1;
        // newCounter.value = 1;
        // newCounter.name = count;
        // newCounter.unit = count;
        // currentData.push(newCounter);
        // save(currentData);
    }

    async showTestData() {
        const data = await loadSampleData();
        return data;
    }

}

function loadSampleData() {

    return [
        {
            id : 1,
            value : 1,
            name : 'Scans',
            increment : 1,
            units : 'scans',
            timestamp : 1,
            geoJson : {
                lat : 67.89,
                lon : 0.00
            }
        },
        {
            id : 2,
            value : 1,
            name : 'Inbound',
            increment : 1,
            units : 'Inbound',
            timestamp : 1,
            geoJson : {
                lat : 67.89,
                lon : 0.00
            }
        },
        {
            id : 3,
            value : 4,
            name : 'Outbound',
            increment : 1,
            units : 'scans',
            timestamp : 1,
            geoJson : {
                lat : 67.89,
                lon : 0.00
            }
        }
    ];

}

export default NativeStore;
