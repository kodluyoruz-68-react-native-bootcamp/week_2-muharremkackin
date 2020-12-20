import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function TodoItem({data, pressed, longPressed}) {
  return (
    <TouchableOpacity
      onPress={() => pressed(data.id)}
      onLongPress={() => longPressed(data.id)}
      style={styles.container}>
      <Text
        style={[
          styles.text,
          {textDecorationLine: data.id ? 'line-through' : 'none'},
        ]}>
        {data.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    marginBottom: 16,
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
  },
});
