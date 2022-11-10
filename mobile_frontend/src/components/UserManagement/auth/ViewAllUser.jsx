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


const styles = StyleSheet.create({
  icon: { fontSize: 35 },
  TextTitle1: {
    marginTop: 10,
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
  TextInput: {
    height: 50,
    padding: 10,
    borderWidth: 5,
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    borderColor: "#8B51F5",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  updateBtn: {
    width: "25%",
    borderRadius: 25,
    marginTop: 25,
    marginLeft: 20,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8B51F5",
  },
  hideBtn: {
    width: "25%",
    borderRadius: 25,
    marginTop: 25,
    marginLeft: 25,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8B51F5",
  },
  deleteBtn: {
    width: "25%",
    borderRadius: 25,
    marginTop: 25,
    marginLeft: 25,
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
});
