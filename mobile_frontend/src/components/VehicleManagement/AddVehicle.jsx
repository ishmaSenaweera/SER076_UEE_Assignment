import React, { useState } from "react";
import { Card, Icon } from "@rneui/themed";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AddVehicle({ navigation }) {
  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate("VehicleList", {})}
        >
          <Icon name="chevron-left" color="black" iconStyle={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.TextTitle1}>Add New Vehicle</Text>
      </View>
      <Card.Divider color="black" style={{ height: 4 }} />
      <View style={styles.container1}>
        <Text style={styles.text1}>Make</Text>
        <TextInput
          // value={}
          style={styles.TextInput}
          // onChangeText={(location1) => setFrom(location1)}
        />
        <Text style={styles.text1}>Model</Text>
        <TextInput
          // value={to}
          style={styles.TextInput}
          // onChangeText={(location2) => setTo(location2)}
        />
        <Text style={styles.text1}>Year</Text>
        <TextInput
          // value={to}
          style={styles.TextInput}
          // onChangeText={(location2) => setTo(location2)}
        />
        <Text style={styles.text1}>Plate Number</Text>
        <TextInput
          // value={to}
          style={styles.TextInput}
          // onChangeText={(location2) => setTo(location2)}
        />
        <Text style={styles.text1}>No of Passengers</Text>
        <TextInput
          // value={to}
          style={styles.TextInput}
          // onChangeText={(location2) => setTo(location2)}
        />

        <View style={styles.row}>
          <TouchableOpacity style={styles.resetBtn}>
            <Text style={styles.resetText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  icon: { fontSize: 35 },
  TextTitle1: {
    fontSize: 30,
  },
  container1: {
    backgroundColor: "#D5BEFF",
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#D5BEFF",
    borderRadius: 25,
    height: "85%",
  },
  text1: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
  },
  resetBtn: {
    width: "30%",
    borderRadius: 25,
    marginTop: 25,
    marginLeft: 50,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderWidth: 3,
    borderColor: "#8B51F5",
  },
  addBtn: {
    width: "30%",
    borderRadius: 25,
    marginTop: 25,
    marginLeft: 50,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8B51F5",
  },
  resetText: {
    color: "black",
    fontSize: 20,
  },
  addText: {
    color: "white",
    fontSize: 20,
  },
  TextInput: {
    height: 50,
    padding: 10,
    borderWidth: 5,
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    borderColor: "#8B51F5",
    backgroundColor: "white",
  },
});
