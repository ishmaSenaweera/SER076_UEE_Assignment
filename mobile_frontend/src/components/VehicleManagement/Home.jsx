import React, { useContext } from "react";
import { Card, Icon } from "@rneui/themed";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AuthContext from "../../context/UserContext";

export default function Home({ navigation }) {
  const { userId, userName } = useContext(AuthContext);

  return (
    <View>
      <Text style={styles.TextTitle1}>Hi {userName},</Text>

      <Card.Divider color="black" style={{ height: 4 }} />

      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.text1}>No of Requests</Text>
          <Text style={styles.text3}>04</Text>
        </View>
      </View>

      <View style={styles.container3}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate("Request")}>
            <View style={styles.container4}>
              <Text style={styles.text4}>Request</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Vehicle")}>
            <View style={styles.container4}>
              <Text style={styles.text4}>Vehicle</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate("Incident")}>
            <View style={styles.container4}>
              <Text style={styles.text4}>Incident</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("User")}>
            <View style={styles.container4}>
              <Text style={styles.text4}>User</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Reward")}>
          <View style={styles.container5}>
            <Text style={styles.text5}>View Reward Sticker</Text>
          </View>
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
    padding: 10,
    fontSize: 40,
    marginLeft: 20,
  },
  container: {
    backgroundColor: "#d8c5fa",
    margin: 10,
    borderWidth: 1,
    borderColor: "#d8c5fa",
    borderRadius: 25,
    height: "24%",
    padding: 15,
  },
  container2: {
    backgroundColor: "#9a6cf0",
    borderWidth: 1,
    borderColor: "#9a6cf0",
    borderRadius: 25,
    height: "100%",
    padding: 0,
  },
  container1: {
    backgroundColor: "white",
    margin: 10,
    borderWidth: 4,
    borderColor: "#D5BEFF",
    borderRadius: 25,
    height: "70%",
  },
  container3: {
    backgroundColor: "#d8c5fa",
    margin: 10,
    borderWidth: 1,
    borderColor: "#d8c5fa",
    borderRadius: 25,
    height: "53%",
    padding: 10,
  },
  container4: {
    backgroundColor: "#9a6cf0",
    borderWidth: 1,
    borderColor: "#9a6cf0",
    borderRadius: 25,
    marginLeft: 20,
    marginBottom: 10,
    height: 125,
    width: 145,
    padding: 0,
  },
  container5: {
    backgroundColor: "#9a6cf0",
    borderWidth: 1,
    borderColor: "#9a6cf0",
    borderRadius: 25,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    height: 75,
    width: 330,
    padding: 0,
  },
  text1: {
    margin: 10,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  text2: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  text3: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
  },
  text4: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 30,
    fontWeight: "bold",
  },
  text5: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 30,
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
