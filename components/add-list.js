import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export function AddList({ submitHandler }) {

    const [text, setText] = useState('');

    const changHandler = (val) => {
        setText(val);
    }
    return (
        <View>
            <TextInput 
                style={styles.TextInput}
                placeholder="add new todo..."
                value={text || ''}
                onChangeText={changHandler}
            />
            <Button 
                title="Add todo"
                disabled={text.length > 0 ? false : true}
                color="#ff7F50"
                onPress={() => submitHandler(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    TextInput: {
        marginBottom: 10,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})