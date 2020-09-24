import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { MaterialIcons} from '@expo/vector-icons';

export function ViewList({ item, handleTouch}) {
  return (
    <TouchableOpacity onPress={() => handleTouch(item.id)}>
      <View style={styles.text}>
        <MaterialIcons name="delete" size={18} color="#333" />
        <Text style={styles.textInput}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    text: {
      padding: 16,
      marginTop: 16,
      borderStyle: 'dashed',
      borderRadius: 10,
      borderColor: '#bbb',
      borderWidth: 1,
      flexDirection: 'row'
    },
    textInput: {
      marginLeft: 10
    }
  });
  
