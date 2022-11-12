import React from "react";
import { Card, Icon } from "@rneui/themed";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RideSummary({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.TextTitle1}>Ride Summary</Text>

      <Card.Divider color="black" style={{ height: 4 }} />

      <TouchableOpacity onPress={() => navigation.navigate("Incident", {Screen: "Incident"})}>
        <Icon
          name="warning"
          // color={focused ? "#000000" : "#585858"}
          iconStyle={styles.icon}
        />
      </TouchableOpacity>

      <View style={styles.container1}>
        <Text style={styles.text1}>Vehicle : </Text>
        <Text style={styles.text1}>Mobile : </Text>
      </View>

      <View
        style={{
          borderWidth: 1,
          height: "30%",
          margin: 15,
          backgroundColor: "#DFD8D7",
          borderColor: "#DFD8D7",
          borderRadius: 15,
        }}
      >
        <Text style={styles.text2}>Journey Details</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.clcBtn}>
          <Text style={styles.reqText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.jrnyBtn}>
          <Text style={styles.reqText}>Journey Complete</Text>
        </TouchableOpacity>
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
  icon: { marginTop: 10, marginLeft: 200, fontSize: 35 },
  TextTitle1: {
    padding: 0,
    fontSize: 30,
    marginLeft: 30,
  },
  container: {
    backgroundColor: "#D5BEFF",
    margin: 20,
    borderWidth: 1,
    borderColor: "#D5BEFF",
    borderRadius: 25,
    height: "85%",
    padding: 0,
  },
  container1: {
    backgroundColor: "white",
    margin: 20,
    borderWidth: 4,
    borderColor: "#D5BEFF",
    borderRadius: 25,
    height: "30%",
  },
  text1: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  text2: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  clcBtn: {
    width: "30%",
    borderRadius: 25,
    marginTop: 25,
    marginLeft: 20,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8B51F5",
  },
  jrnyBtn: {
    width: "50%",
    borderRadius: 25,
    marginTop: 25,
    marginLeft: 20,
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
