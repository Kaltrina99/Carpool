import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import Ride from './home_child/Ride'
import Create from './home_child/Create'
import Notification from './home_child/Notification'

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                </View>
                <View style={styles.tabbar}>
                    <ScrollableTabView
                        initialPage={0}
                        tabBarActiveTextColor="maroon"
                        renderTabBar={() => <DefaultTabBar
                            underlineStyle={{
                                backgroundColor: 'maroon'
                            }} />}
                    >
                        <Ride tabLabel="Ride" props={this.props} />
                        <Create tabLabel="Create" props={this.props} />
                        <Notification tabLabel="Notification" props={this.props} />

                    </ScrollableTabView>
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
        marginTop: 20,
    },
    tabbar: {
        flex:1,
        marginTop: 0.3,
        paddingHorizontal:30
    },
    title: {
        color: 'black',
        marginTop: 25,
        fontWeight: 'bold',
        fontSize: 25
    }
});
