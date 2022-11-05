import React, { useContext, useState } from "react";
import { Card, Icon } from "@rneui/themed";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";
import AuthContext from "../../context/UserContext";

export default function AddVehicle({ navigation }) {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [plateNo, setPlateNo] = useState("");
  const [passengers, setPassengers] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { userId } = useContext(AuthContext);

  const resetForm = (e) => {
    setMake("");
    setModel("");
    setPlateNo("");
    setPassengers("");
    setVehicleType("");
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      /* Creating an object with the same name as the variables. */
      const UserData = {
        user: userId,
        make,
        model,
        plateNo,
        passengers,
        vehicleType,
      };

      const result = await axios.post(
        "http://192.168.1.190:8000/vehicle/add",
        UserData
      );

      if (result?.status === 201) {
        alert(result?.data?.Message);
        /* Reloading the page. */
      }
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.errorMessage);
    }
  };

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
          value={make}
          style={styles.TextInput}
          onChangeText={(e) => setMake(e)}
        />
        <Text style={styles.text1}>Model</Text>
        <TextInput
          value={model}
          style={styles.TextInput}
          onChangeText={(e) => setModel(e)}
        />
        <Text style={styles.text1}>Plate Number</Text>
        <TextInput
          value={plateNo}
          style={styles.TextInput}
          onChangeText={(e) => setPlateNo(e)}
        />
        <Text style={styles.text1}>No of Passengers</Text>
        <TextInput
          value={passengers}
          style={styles.TextInput}
          onChangeText={(e) => setPassengers(e)}
        />
        <Text style={styles.text1}>Vehicle Type</Text>
        <TextInput
          value={vehicleType}
          style={styles.TextInput}
          onChangeText={(e) => setVehicleType(e)}
        />

        <View style={styles.row}>
          <TouchableOpacity style={styles.resetBtn} onPress={resetForm}>
            <Text style={styles.resetText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addBtn} onPress={register}>
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
