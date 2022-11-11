import { Card, Icon } from "@rneui/themed";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import { BASE_URL } from "../constants/Url.json";

export default function ViewVehicleInfo({ navigation, route }) {
  const deleteVehicle = async () => {
    try {
      const result = await axios.delete(
        BASE_URL + `/vehicle/delete/${route.params.vehicle._id}`
      );
      if (result?.status === 201) {
        alert(result?.data?.Message);
        /* Reloading the page. */
        navigation.navigate("VehicleList", {});
      }
    } catch (error) {
      console.log(error);
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
        <Text style={styles.TextTitle1}>Vehicle Info</Text>
      </View>

      <Card.Divider color="black" style={{ height: 4 }} />

      <View style={styles.container1}>
        <Text style={styles.TextInput}>Make : {route.params.vehicle.make}</Text>
        <Text style={styles.TextInput}>
          Model : {route.params.vehicle.model}
        </Text>
        <Text style={styles.TextInput}>
          Plate No: {route.params.vehicle.plateNo}
        </Text>
        <Text style={styles.TextInput}>
          Passengers : {route.params.vehicle.passengers}
        </Text>
        <Text style={styles.TextInput}>
          Registered : {route.params.vehicle.registered}
        </Text>
        <Text style={styles.TextInput}>
          Vehicle Type : {route.params.vehicle.vehicleType}
        </Text>
        <Text style={styles.TextInput}>
          Registered in SLIIT :{" "}
          {(route.params.vehicle.registered = true ? "Yes" : "No")}
        </Text>
        <Card.Divider color="black" style={{ height: 4 }} />

        <View style={styles.row}>
          <TouchableOpacity style={styles.updateBtn}>
            <Text style={styles.reqText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hideBtn}>
            <Text style={styles.reqText}>Hide</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteBtn} onPress={deleteVehicle}>
            <Text style={styles.reqText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: { fontSize: 35 },
  TextTitle1: {
    marginTop: 30,
    marginLeft: 50,
    fontSize: 40,
  },
  container1: {
    paddingTop: 5,
    backgroundColor: "#dbcef5",
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#D5BEFF",
    borderRadius: 25,
    height: "81%",
  },
  TextInput: {
    height: 50,
    paddingTop: 7,
    paddingLeft: 15,
    borderWidth: 2,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    borderColor: "#8B51F5",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  updateBtn: {
    width: "28%",
    borderRadius: 25,
    marginLeft: 15,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8B51F5",
  },
  hideBtn: {
    width: "28%",
    borderRadius: 25,
    marginLeft: 15,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8B51F5",
  },
  deleteBtn: {
    width: "28%",
    borderRadius: 25,
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
});
