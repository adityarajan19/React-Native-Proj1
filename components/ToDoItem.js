import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function TodoItem({ item, deleteItem }) {
  return (
      <View>
        <Text style={ styles.item }>{item.value}</Text>
          <TouchableOpacity
            onPress={() => 
            deleteItem(item.key)
            }
            style={styles.iconContainer}
            >
            <Text>Delete</Text>
          </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10
  },
  iconContainer: {
    marginRight: 10,
    marginTop: 15,
    height: 30,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "whitesmoke",
    marginBottom: 20,
    borderRadius: 50,
  }
  });