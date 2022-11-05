import React from "react";
import { Card, Icon } from "@rneui/themed";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function VehicleList({ navigation }) {
  return (
    <View>
      <Text style={styles.TextTitle1}>Hi</Text>
      <View style={styles.row}>
        <Text style={styles.TextTitle2}>Vehicle List</Text>
        <TouchableOpacity onPress={() => navigation.navigate("AddVehicle", {})}>
          <Icon
            name="add"
            color="#000000"
            iconStyle={{ marginLeft: 130, fontSize: 30 }}
          />
        </TouchableOpacity>
      </View>
      <Card.Divider color="black" style={{ height: 4 }} />
      <ScrollView
        style={{
          height: "70%",
          margin: 10,
          backgroundColor: "#D5BEFF",
          borderRadius: 25,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("ViewVehicleInfo", {})}
        >
          <View
            style={{
              borderWidth: 5,
              height: 60,
              margin: 15,
              backgroundColor: "#B48FF8",
              borderColor: "#8B51F5",
              borderRadius: 15,
              padding: 10,
            }}
          >
            <View style={styles.row}>
              <Text style={styles.text1}>Name :</Text>
              <Text style={styles.text2}>Location :</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D5BEFF",
    margin: 15,
    borderWidth: 1,
    borderColor: "#D5BEFF",
    borderRadius: 25,
    height: "70%",
    padding: 0,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  icon: { marginTop: 10, marginRight: 20, fontSize: 35 },
  TextTitle1: {
    padding: 0,
    fontSize: 30,
    marginLeft: 50,
  },
  TextTitle2: {
    padding: 0,
    marginLeft: 50,
    fontSize: 30,
  },
  text1: {
    fontSize: 25,
  },
  text2: {
    fontSize: 15,
    marginLeft: 90,
  },
});
