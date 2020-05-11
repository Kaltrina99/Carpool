import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import Ride from './home_child/Ride'
import Create from './home_child/Create'
import Notification from './home_child/Notification'


//var ScrollableTabView = require('react-native-scrollable-tab-view');
export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>

                </View>
                <View style={styles.tabbar}>

                    <ScrollableTabView
                        style={{ marginTop: 20 }}
                        initialPage={1}
                        renderTabBar={() => <DefaultTabBar />}
                    >
                        <Ride tabLabel='Ride' />
                        <Create tabLabel='Create' />
                        <Notification tabLabel='Notification' />
                    </ScrollableTabView>;
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        marginTop: 20
    },
    tabbar: {
        flex: 1
    },
    title: {
        color: 'black',
        marginTop: 25,
        fontWeight: 'bold',
        fontSize: 25
    }
});
