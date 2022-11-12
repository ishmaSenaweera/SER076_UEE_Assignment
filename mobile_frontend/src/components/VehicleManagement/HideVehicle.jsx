import { Card, Icon } from "@rneui/themed";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import { BASE_URL } from "../constants/Url.json";
import CustomAlert from "../customAlert/CustomAlert";
import { useState } from "react";
import CheckBox from "expo-checkbox";

export default function HideVehicle({ navigation, route }) {
  const [makeHide, setMakeHide] = useState(route.params.makeHide);
  const [modelHide, setModelHide] = useState(route.params.modelHide);
  const [plateNoHide, setPlateNoHide] = useState(route.params.plateNoHide);
  const [passengersHide, setPassengersHide] = useState(
    route.params.passengersHide
  );
  const [confirm, setConfirm] = useState(false);
  const [successShow, setSuccessShow] = useState(false);
  const [backShow, setBackShow] = useState(false);

  const resetForm = () => {
    setMakeHide(route.params.makeHide);
    setModelHide(route.params.modelHide);
    setPlateNoHide(route.params.plateNoHide);
    setPassengersHide(route.params.passengersHide);
  };

  const backButton = (e) => {
    if (
      makeHide !== route.params.makeHide ||
      modelHide !== route.params.modelHide ||
      plateNoHide !== route.params.plateNoHide ||
      passengersHide !== route.params.passengersHide
    ) {
      setBackShow(true);
    } else {
      navigation.navigate("VehicleList", route.params);
    }
  };

  const confirmAlert = (e) => {
    setBackShow(false);
    if (e) {
      navigation.navigate("VehicleList", route.params);
    }
  };

  const successAlert = (e) => {
    setSuccessShow(false);
    setBackShow(false);
    navigation.navigate("VehicleList", route.params);
  };

  const updateHandler = (e) => {
    setConfirm(true);
  };

  const update = async (e) => {
    if (e) {
      try {
        /* Creating an object with the same name as the variables. */
        const UserData = {
          makeHide,
          modelHide,
          plateNoHide,
          passengersHide,
        };

        const result = await axios.put(
          BASE_URL + `/vehicle/update/${route.params._id}`,
          UserData
        );

        if (result?.status === 201) {
          setSuccessShow(true);
        }
      } catch (err) {
        console.error(err);
        setErrorShow(true);
      }
    } else {
      setConfirm(false);
    }
  };

  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => backButton()}>
          <Icon name="chevron-left" color="black" iconStyle={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.TextTitle1}>Hide Vehicle Info</Text>
      </View>

      <Card.Divider color="black" style={{ height: 4 }} />

      <View style={styles.container1}>
        <View style={styles.row}>
          <CheckBox
            disabled={false}
            style={styles.checkBox}
            value={makeHide}
            onValueChange={setMakeHide}
          />
          <Text style={styles.label}>Hide</Text>
        </View>
        <Text style={styles.TextInput}>Make : {route.params.make}</Text>
        <View style={styles.row}>
          <CheckBox
            disabled={false}
            style={styles.checkBox}
            value={modelHide}
            onValueChange={setModelHide}
          />
          <Text style={styles.label}>Hide</Text>
        </View>
        <Text style={styles.TextInput}>Model : {route.params.model}</Text>
        <View style={styles.row}>
          <CheckBox
            disabled={false}
            style={styles.checkBox}
            value={plateNoHide}
            onValueChange={setPlateNoHide}
          />
          <Text style={styles.label}>Hide</Text>
        </View>
        <Text style={styles.TextInput}>Plate No: {route.params.plateNo}</Text>
        <View style={styles.row}>
          <CheckBox
            disabled={false}
            style={styles.checkBox}
            value={passengersHide}
            onValueChange={setPassengersHide}
          />
          <Text style={styles.label}>Hide</Text>
        </View>
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
          <TouchableOpacity style={styles.resetBtn} onPress={resetForm}>
            <Text style={styles.resetText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addBtn} onPress={updateHandler}>
            <Text style={styles.addText}>Hide</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CustomAlert
        displayMode={"confirm"}
        displayMsg={"Discard the changes?"}
        visibility={backShow}
        dismissAlert={setBackShow}
        confirmAlert={confirmAlert}
      />
      <CustomAlert
        displayMode={"confirm"}
        displayMsg={"Do you want to update this vehicle?"}
        visibility={confirm}
        dismissAlert={setConfirm}
        confirmAlert={update}
      />
      <CustomAlert
        displayMode={"success"}
        displayMsg={"Vehicle Updated Successfully"}
        visibility={successShow}
        dismissAlert={successAlert}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: { fontSize: 35 },
  TextTitle1: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 40,
  },
  container1: {
    paddingTop: 5,
    backgroundColor: "#dbcef5",
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#D5BEFF",
    borderRadius: 25,
    height: "83%",
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
    marginBottom: 10,
    marginTop: 5,
    fontSize: 25,
    fontWeight: "bold",
    elevation: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  resetBtn: {
    width: "40%",
    borderRadius: 25,
    marginLeft: 27,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderWidth: 3,
    borderColor: "#8B51F5",
  },
  addBtn: {
    width: "40%",
    borderRadius: 25,
    marginLeft: 20,
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
  label: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 15,
  },
  checkBox: {
    marginLeft: 15,
    borderWidth: 3,
    borderColor: "#8B51F5",
  },
});
