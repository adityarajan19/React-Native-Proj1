import React, { useState } from "react";
import {StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native';



export default function AddToDoItem({submitHandler}) {
  const [value, setValue] = useState("");

  const onChangeText = (value) => {
    setValue(value);
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Add Task ..." onChangeText= {onChangeText} />
      </View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          setValue(submitHandler(value));
        }}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 10
  },
  input: {
  fontSize: 20,
  backgroundColor: "white",
  width: 300,
  marginRight: 20,
  padding: 10,
  marginBottom: 20,
  borderRadius: 10
  },
  submitButton: {
  width: 60,
  height: 30,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "whitesmoke",
  marginBottom: 20,
  borderRadius: 50,
  }
});