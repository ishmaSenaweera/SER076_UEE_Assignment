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

export default function ViewRequest({ navigation }) {
  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity
        //   onPress={() => navigation.navigate("RequestList", {})}
        >
          <Icon name="chevron-left" color="black" iconStyle={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.TextTitle1}>Your Ride Request</Text>
      </View>
      <Card.Divider color="black" style={{ height: 4 }} />
      <View style={styles.container1}>
        <Text style={styles.text1}>Ride Details</Text>
        <Text style={styles.text2}>From</Text>
        <TextInput
          //   value={from}
          style={styles.TextInput}
          //   onChangeText={(location1) => setFrom(location1)}
          editable={false}
        />
        <Text style={styles.text2}>To</Text>
        <TextInput
          //   value={to}
          style={styles.TextInput}
          //   onChangeText={(location2) => setTo(location2)}
          editable={false}
        />
        <Text style={styles.text2}>Time?</Text>
        <TextInput
          //   value={to}
          style={styles.TextInput}
          //   onChangeText={(location2) => setTo(location2)}
          editable={false}
        />
        <Text style={styles.text2}>Seats Needed?</Text>
        <Text style={styles.text3}>1</Text>

        <View style={styles.row}>
          <TouchableOpacity style={styles.updateBtn}>
            <Text style={styles.reqText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.statusBtn}
            onPress={() => navigation.navigate("ViewStatus", {})}
          >
            <Text style={styles.reqText}>View Status</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteBtn}>
            <Text style={styles.reqText}>Delete</Text>
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
    margin: 10,
    borderWidth: 1,
    borderColor: "#D5BEFF",
    borderRadius: 25,
    height: "83%",
  },
  text1: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 10,
  },
  text2: {
    fontSize: 20,
    padding: 10,
  },
  text3: {
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 60,
  },
  updateBtn: {
    width: "25%",
    borderRadius: 25,
    marginTop: 25,
    marginLeft: 15,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8B51F5",
  },
  statusBtn: {
    width: "35%",
    borderRadius: 25,
    marginTop: 25,
    marginLeft: 15,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#405DF4",
  },
  deleteBtn: {
    width: "25%",
    borderRadius: 25,
    marginTop: 25,
    marginLeft: 15,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F55151",
  },
  reqText: {
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
