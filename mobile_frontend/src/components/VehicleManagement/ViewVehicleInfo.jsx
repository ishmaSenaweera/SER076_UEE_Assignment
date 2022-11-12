import { Card, Icon } from "@rneui/themed";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import { BASE_URL } from "../constants/Url.json";
import CustomAlert from "../customAlert/CustomAlert";
import { useState } from "react";

export default function ViewVehicleInfo({ navigation, route }) {
  const [confirm, setConfirm] = useState(false);
  const [successShow, setSuccessShow] = useState(false);

  const deleteHandler = async () => {
    setConfirm(true);
  };

  const successAlert = (e) => {
    setSuccessShow(false);
    navigation.navigate("VehicleList", {});
  };

  const deleteVehicle = async (e) => {
    if (e) {
      try {
        const result = await axios.delete(
          BASE_URL + `/vehicle/delete/${route.params._id}`
        );
        if (result?.status === 201) {
          setSuccessShow(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setConfirm(false);
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
        <Text style={styles.TextInput}>Make : {route.params.make}</Text>
        <Text style={styles.TextInput}>Model : {route.params.model}</Text>
        <Text style={styles.TextInput}>Plate No: {route.params.plateNo}</Text>
        <Text style={styles.TextInput}>
          Passengers : {route.params.passengers}
        </Text>
        <Text style={styles.TextInput}>
          Vehicle Type : {route.params.vehicleType}
        </Text>
        <Text style={styles.TextInput}>
          Registered in SLIIT :{" "}
          {route.params.registered === true ? "Yes" : "No"}
        </Text>
        <Card.Divider color="black" style={{ height: 4 }} />

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.updateBtn}
            onPress={() => navigation.navigate("UpdateVehicle", route.params)}
          >
            <Text style={styles.reqText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.hideBtn}
            onPress={() => navigation.navigate("HideVehicle", route.params)}
          >
            <Text style={styles.reqText}>Hide</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteBtn} onPress={deleteHandler}>
            <Text style={styles.reqText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CustomAlert
        displayMode={"confirm"}
        displayMsg={"Are you sure you want to delete this vehicle?"}
        visibility={confirm}
        dismissAlert={setConfirm}
        confirmAlert={deleteVehicle}
      />
      <CustomAlert
        displayMode={"success"}
        displayMsg={"Vehicle deleted successfully!"}
        visibility={successShow}
        dismissAlert={successAlert}
      />
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
    height: "76%",
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
    elevation: 20,
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
