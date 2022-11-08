import React from "react";
import { Card, Icon } from "@rneui/themed";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ViewStatus({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ViewRequest", {})}
        >
          <Icon name="chevron-left" color="black" iconStyle={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.TextTitle1}>Ride Status</Text>
      </View>

      <Card.Divider color="black" style={{ height: 4 }} />

      <View style={styles.container1}>
        <Text style={styles.text1}>Status : </Text>
      </View>

      <ScrollView style={{ height: "50%", marginBottom: 10 }}>
        <TouchableOpacity
        //   onPress={() => navigation.navigate("ViewRequestInfo", {})}
        >
          <View
            style={{
              borderWidth: 1,
              height: 150,
              margin: 15,
              backgroundColor: "#DFD8D7",
              borderColor: "#DFD8D7",
              borderRadius: 15,
            }}
          >
            <View style={{ padding: 10 }}>
              <TouchableOpacity style={styles.confirmBtn}>
                <Text style={styles.conText}>Confirm Ride</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  icon: { marginTop: 10, marginLeft: 20, fontSize: 35 },
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
    height: "20%",
  },
  text1: {
    padding: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
  confirmBtn: {
    width: "40%",
    borderRadius: 25,
    marginTop: 60,
    marginLeft: 150,
    height: 50,
    backgroundColor: "#8B51F5",
  },
  conText: {
    padding: 15,
    color: "white",
    fontSize: 15,
  },
});
