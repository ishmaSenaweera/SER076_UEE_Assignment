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
      <View style={styles.row}>
        <TouchableOpacity>
          <Icon name="chevron-left" color="black" iconStyle={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.TextTitle1}>Hi</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.TextTitle2}>Vehicle List</Text>
        <TouchableOpacity onPress={() => navigation.navigate("AddVehicle", {})}>
          <Icon
            name="add"
            color="#000000"
            iconStyle={{ marginLeft: 70, fontSize: 30 }}
          />
        </TouchableOpacity>
      </View>
      <Card.Divider color="black" />

      <ScrollView
        style={{
          height: "70%",
          margin: 10,
          backgroundColor: "#D5BEFF",
          borderRadius: 25,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("ViewRequestInfo", {})}
        >
          <View
            style={{
              borderWidth: 1,
              height: 50,
              margin: 15,
              backgroundColor: "#B48FF8",
              borderColor: "#8A8484",
              borderRadius: 15,
              padding: 8,
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
    marginRight: 250,
  },
  TextTitle2: {
    padding: 0,
    marginLeft: 80,
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
