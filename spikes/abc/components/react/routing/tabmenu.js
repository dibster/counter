import React, { Component } from 'react';
import {
  TabBarIOS,
  NavigatorIOS
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import ColoredView from './coloredView.js';

import styles from '../../styles/stylesTab.js';


class TabBarExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'home'
        };
    }

    componentWillMount() {
    // https://github.com/facebook/react-native/issues/1403 prevents this to work for initial load
        Icon.getImageSource('ios-settings', 30).then((source) => this.setState({ gearIcon: source }));
    }

    _renderContent(color, pageText) {
        if (!this.state.gearIcon) {
            return false;
        }
        const props = { color, pageText };
        return (
          <NavigatorIOS
              style={styles.navigator}
              initialRoute={{
                  component: ColoredView,
                  passProps: props,
                  title: pageText,
                  rightButtonIcon: this.state.gearIcon
              }}
          />
        );
    }

    render() {
        return (
            <TabBarIOS
                tintColor="black"
                barTintColor="#3abeff"
            >

            <Icon.TabBarItemIOS
                title="Home"
                iconName="ios-home-outline"
                selectedIconName="ios-home"
                selected={this.state.selectedTab === 'home'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'home'
                    });
                }}
            >
                {this._renderContent('#414A8C', 'Home')}
            </Icon.TabBarItemIOS>

            <Icon.TabBarItemIOS
                title = "Time"
                iconName = "ios-time-outline"
                selectedIconName = "ios-time"
                selected = {
                    this.state.selectedTab === 'profile'
                }
                onPress = {
                    () => {
                        this.setState({
                            selectedTab: 'profile'
                        });
                    }
                }
            >
              {this._renderContent('#090', 'Time')}
            </Icon.TabBarItemIOS>

            <Icon.TabBarItemIOS
                title = "Location"
                iconName = "ios-heart-outline"
                selectedIconName = "ios-heart"
                selected = {
                    this.state.selectedTab === 'globe'
                }
                onPress = {
                    () => {
                        this.setState({
                            selectedTab: 'globe'
                        });
                    }
                }
            >
              {this._renderContent('#090', 'Location')}
            </Icon.TabBarItemIOS>

          </TabBarIOS>
        );
    }
}

export default TabBarExample;
