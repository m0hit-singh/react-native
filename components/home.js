import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Home() {
    return (
        <View style={StyleSheet.container}>
            <Text>Home Screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
});