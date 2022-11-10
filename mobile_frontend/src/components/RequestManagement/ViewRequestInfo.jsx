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
import { BASE_URL } from "../constants/Url.json";

export default function ViewRequestInfo({ navigation }) {
  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate("RequestList", {})}
        >
          <Icon name="chevron-left" color="black" iconStyle={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.TextTitle1}>Request Info</Text>
      </View>
      <Card.Divider color="black" style={{ height: 20 }} />
      <View style={styles.container1}>
        <Text style={styles.text1}>Name: </Text>

        <View style={styles.container2}></View>

        <View style={styles.row1}>
          <Text style={styles.text2}>Vehicle Type:</Text>
          <Text style={styles.text2}>Vehicle Type:</Text>
        </View>

        <View style={styles.row1}>
          <TouchableOpacity style={styles.decBtn}>
            <Text style={styles.reqText}>Decline</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accBtn}>
            <Text style={styles.reqText}>Accept</Text>
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
  row1: {
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
    height: "80%",
  },
  container2: {
    backgroundColor: "#8B51F5",
    margin: 10,
    borderWidth: 1,
    borderColor: "#8B51F5",
    borderRadius: 25,
    height: "60%",
  },
  text1: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 10,
    textAlign: "center",
  },
  text2: {
    fontSize: 20,
    padding: 10,
  },
  decBtn: {
    width: "30%",
    borderRadius: 25,
    marginTop: 25,
    marginLeft: 40,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F55151",
  },
  accBtn: {
    width: "30%",
    borderRadius: 25,
    marginTop: 25,
    marginLeft: 70,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8B51F5",
  },
  reqText: {
    color: "white",
    fontSize: 20,
  },
});
