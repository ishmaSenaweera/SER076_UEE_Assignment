import React, { useContext, useEffect, useState } from "react";
import { Card, Icon } from "@rneui/themed";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";
import AuthContext from "../../context/UserContext";
import { useIsFocused } from "@react-navigation/native";

export default function VehicleList({ navigation }) {
  const [vehicles, setVehicles] = useState([]);
  const { userId, userName } = useContext(AuthContext);

  const isFocused = useIsFocused();

  const getVehicles = async () => {
    try {
      const result = await axios.get(
        `http://192.168.1.190:8000/vehicle/getByUser/${userId}`
      );
      /* Setting the state of the notes and totalPage variables. */
      setVehicles(result?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVehicles();
  }, [isFocused]);
  return (
    <View>
      <Text style={styles.TextTitle1}>Hi {userName},</Text>
      <View style={styles.row}>
        <Text style={styles.TextTitle2}>Vehicle List</Text>
        <TouchableOpacity onPress={() => navigation.navigate("AddVehicle", {})}>
          <Icon
            name="add"
            color="#000000"
            iconStyle={{ marginLeft: 150, fontSize: 40 }}
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
        {vehicles.map((vehicle, i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() =>
                navigation.navigate("ViewVehicleInfo", { vehicle: vehicle })
              }
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
                  <Text style={styles.text1}>
                    {vehicle.make}-{vehicle.model}
                  </Text>
                  <Text style={styles.text2}>{vehicle.vehicleType}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
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
  },
  icon: { marginTop: 10, marginRight: 20, fontSize: 35 },
  TextTitle1: {
    padding: 0,
    fontSize: 30,
    marginLeft: 20,
  },
  TextTitle2: {
    padding: 0,
    marginLeft: 20,
    fontSize: 30,
  },
  text1: {
    fontSize: 25,
  },
  text2: {
    fontSize: 15,
    padding: 8,
    marginLeft: "auto",
  },
});
