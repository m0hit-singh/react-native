import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'coral',
        height: 60,
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: 20
    }
});