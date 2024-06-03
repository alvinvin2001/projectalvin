import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';

const InputBarang = ({
  label,
  placeholder,
  keyboardType,
  onChangeText,
  namaState,
  value,
}) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        keyboardType={keyboardType}
        value={value}
        onChangeText={text => onChangeText(namaState, text)}
      />
    </>
  );
};

export default InputBarang;

const styles = StyleSheet.create({
  label: {
    color: 'black',
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
});
