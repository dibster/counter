const STORAGE_KEY = 'dibster2';

import React, {Component, AsyncStorage} from 'react-native';

class NativeStore {

    async loadInitialState() {
        console.log('in load');
        try {
            const value = await AsyncStorage.getItem(STORAGE_KEY);
            console.log('value of Async', value);
            return JSON.parse(value);
        } catch (error) {
            console.error('AsyncStorage error: ' + error.message);
        }
    }

    async saveData(data) {
        console.log('In Save Data');

        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            console.log('Saved selection to disk: ', data);
        } catch (error) {
            console.error('Eror saving', error);
        }
    }

}

export default NativeStore;
