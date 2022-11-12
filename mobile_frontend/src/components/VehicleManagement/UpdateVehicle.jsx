import { useContext, useState } from "react";
import { Card, Icon } from "@rneui/themed";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { BASE_URL } from "../constants/Url.json";
import axios from "axios";
import AuthContext from "../../context/UserContext";
import CheckBox from "expo-checkbox";
import CustomAlert from "../customAlert/CustomAlert";

export default function UpdateVehicle({ navigation, route }) {
  const [make, setMake] = useState(route.params.make);
  const [model, setModel] = useState(route.params.model);
  const [plateNo, setPlateNo] = useState(route.params.plateNo);
  const [passengers, setPassengers] = useState(
    route.params.passengers?.toString()
  );
  const [vehicleType, setVehicleType] = useState(route.params.vehicleType);
  const [registered, setRegistered] = useState(route.params.registered);
  const [backShow, setBackShow] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [successShow, setSuccessShow] = useState(false);

  const { userId } = useContext(AuthContext);

  const resetForm = () => {
    setMake(route.params.make);
    setModel(route.params.model);
    setPlateNo(route.params.plateNo);
    setPassengers(route.params.passengers);
    setVehicleType(route.params.vehicleType);
  };

  const backButton = (e) => {
    if (
      make !== route.params.make ||
      model !== route.params.model ||
      vehicleType !== route.params.vehicleType
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
          user: userId,
          make,
          model,
          plateNo,
          passengers,
          vehicleType,
          registered,
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
        <Text style={styles.TextTitle}>Update Vehicle</Text>
      </View>

      <Card.Divider color="black" style={{ height: 4 }} />

      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.label}>Make</Text>
          <Text style={styles.required}>*</Text>
        </View>
        <TextInput
          value={make}
          style={styles.TextInput}
          required
          placeholder="Make (Toyota, Nissan, etc.)"
          onChangeText={(e) => setMake(e)}
        />

        <View style={styles.row}>
          <Text style={styles.label}>Model</Text>
          <Text style={styles.required}>*</Text>
        </View>
        <TextInput
          value={model}
          style={styles.TextInput}
          placeholder="Model (Corolla, Tiida, etc.)"
          onChangeText={(e) => setModel(e)}
        />

        <Text style={styles.label}>Plate Number</Text>
        <TextInput
          value={plateNo}
          style={styles.TextInput}
          maxLength={8}
          placeholder="Plate Number (ABC-1234, etc.)"
          onChangeText={(e) => setPlateNo(e)}
        />

        <Text style={styles.label}>No of Passengers</Text>
        <TextInput
          value={passengers}
          style={styles.TextInput}
          maxLength={1}
          placeholder="No of Passengers (1, 2, 3, etc.)"
          onChangeText={(e) => setPassengers(e.replace(/[^0-9]/g, ""))}
        />

        <View style={styles.row}>
          <Text style={styles.label}>Vehicle Type</Text>
          <Text style={styles.required}>*</Text>
        </View>
        <TextInput
          value={vehicleType}
          style={styles.TextInput}
          placeholder="Vehicle Type (Car, Van, etc.)"
          onChangeText={(e) => setVehicleType(e)}
        />

        <View style={styles.row}>
          <CheckBox
            disabled={false}
            style={styles.checkBox}
            value={registered}
            onValueChange={setRegistered}
          />
          <Text style={styles.label}>Vehicle Registered in SLIIT</Text>
        </View>

        <Card.Divider color="black" style={{ height: 4, marginTop: 10 }} />

        <View style={styles.row}>
          <TouchableOpacity style={styles.resetBtn} onPress={resetForm}>
            <Text style={styles.resetText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addBtn} onPress={updateHandler}>
            <Text style={styles.addText}>Add</Text>
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
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: { fontSize: 35 },
  TextTitle: {
    marginTop: 40,
    marginLeft: 25,
    fontSize: 40,
  },
  container: {
    backgroundColor: "#D5BEFF",
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#D5BEFF",
    borderRadius: 25,
    height: "79%",
  },
  label: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 15,
  },
  required: {
    fontWeight: "bold",
    color: "red",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 2,
  },
  checkBox: {
    marginTop: 10,
    marginLeft: 15,
    borderWidth: 3,
    borderColor: "#8B51F5",
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
  TextInput: {
    height: 50,
    padding: 10,
    borderWidth: 3,
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    elevation: 15,
    borderColor: "#8B51F5",
    backgroundColor: "white",
  },
});
