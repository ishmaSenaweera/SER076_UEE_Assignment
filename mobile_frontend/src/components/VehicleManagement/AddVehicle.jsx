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

export default function AddVehicle({ navigation }) {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [plateNo, setPlateNo] = useState("");
  const [passengers, setPassengers] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [registered, setRegistered] = useState(false);
  const [backShow, setBackShow] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [errorShow, setErrorShow] = useState(false);
  const [error, setError] = useState("");
  const [successShow, setSuccessShow] = useState(false);

  const { userId } = useContext(AuthContext);

  const resetForm = () => {
    setMake("");
    setModel("");
    setPlateNo("");
    setPassengers("");
    setVehicleType("");
  };

  const backButton = (e) => {
    if (make !== "" || model !== "" || vehicleType !== "") {
      setBackShow(true);
    } else {
      navigation.navigate("VehicleList", {});
    }
  };

  const confirmAlert = (e) => {
    setBackShow(false);
    if (e) {
      navigation.navigate("VehicleList", {});
    }
  };

  const successAlert = (e) => {
    setSuccessShow(false);
    setBackShow(false);
    navigation.navigate("VehicleList", {});
  };

  const register = async (e) => {
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
        const result = await axios.post(BASE_URL + "/vehicle/add", UserData);

        if (result?.status === 201) {
          setSuccessShow(true);
          // navigation.navigate("VehicleList", {});
        }
      } catch (err) {
        console.error(err);
        alert(err?.response?.data?.errorMessage);
      }
    } else {
      setConfirm(false);
    }
  };

  const registerHandler = (e) => {
    e.preventDefault();
    try {
      if (!make.trim()) {
        setError("Please Enter Make of the Vehicle (Toyota, Nissan, etc.)");
        setErrorShow(true);
        return;
      } else if (!model.trim()) {
        setError("Please Enter Model of the Vehicle (Corolla, Tiida, etc.)");
        setErrorShow(true);
        return;
      } else if (!vehicleType.trim()) {
        setError("Please Enter Vehicle Type (Car, Van, etc.)");
        setErrorShow(true);
        return;
      } else {
        setConfirm(true);
      }
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.errorMessage);
    }
  };

  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => backButton()}>
          <Icon name="chevron-left" color="black" iconStyle={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.TextTitle}>Add New Vehicle</Text>
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
          keyboardType="numeric"
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
            onValueChange={(e) => setRegistered(e)}
          />
          <Text style={styles.label}>Vehicle Registered in SLIIT</Text>
        </View>

        <Card.Divider color="black" style={{ height: 4, marginTop: 10 }} />

        <View style={styles.row}>
          <TouchableOpacity style={styles.resetBtn} onPress={resetForm}>
            <Text style={styles.resetText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addBtn} onPress={registerHandler}>
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
        displayMsg={"Do you want to add this vehicle?"}
        visibility={confirm}
        dismissAlert={setConfirm}
        confirmAlert={register}
      />
      <CustomAlert
        displayMode={"error"}
        displayMsg={error}
        visibility={errorShow}
        dismissAlert={setErrorShow}
        confirmAlert={confirmAlert}
      />
      <CustomAlert
        displayMode={"success"}
        displayMsg={"Vehicle Added Successfully"}
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
    marginLeft: 10,
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
    borderColor: "#8B51F5",
    backgroundColor: "white",
  },
});
