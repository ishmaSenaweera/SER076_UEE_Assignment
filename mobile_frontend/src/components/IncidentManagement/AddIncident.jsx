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

export default function AddIncident({ navigation }) {
  const [incident, setIncident] = useState("");
  // const [model, setModel] = useState("");
  // const [plateNo, setPlateNo] = useState("");
  // const [passengers, setPassengers] = useState("");
  // const [vehicleType, setVehicleType] = useState("");
  // const [toggleCheckBox, setToggleCheckBox] = useState(false);

   const { userId } = useContext(AuthContext);

  const resetData = (e) => {
    setIncident("");
    // setModel("");
    // setPlateNo("");
    // setPassengers("");
    // setVehicleType("");
  };

  const AddIncident = async (e) => {
    // e.preventDefault();
    // try {
    //   /* Creating an object with the same name as the variables. */
    //   const UserData = {
    //     //user: userId,
    //     "incident" : incident
        
    //   };
    //   const result = await axios.post(BASE_URL + "/incident/new", UserData);

    //   if (result?.status === 201) {
    //     alert(result?.data?.Message);
    //     /* Reloading the page. */
    //   }
    // } catch (err) {
    //   console.error(err);
    //   alert(err?.response?.data?.errorMessage);
    // }

    var data = {
      "incident" : incident,
      "user" : userId,
      "action" : action
  }
  axios({
      url:BASE_URL + "/incident/new",
      method:"POST",
      data : data,
      headers : {
          "Content-Type" : "application/json"
      }
  }).then((res) => {
      console.log(data);
      
      setIncident("")
      // setVisible(false)
      console.log(data);
      alert("Successfully")
  })
  };

  const onChangeIncidentName = (value) => {
    setIncident(value)
        }

  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ViewAllIncidents", {})}
        >
          <Icon name="chevron-left" color="black" iconStyle={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.TextTitle1}>Add Incident</Text>
      </View>

      <Card.Divider color="black" style={{ height: 4 }} />

      <View style={styles.container1}>
        <Text style={styles.text1}>Referrence No</Text>
        {/* <TextInput
          value={incident}
          style={styles.TextInput}
          placeholder="Incident"
          onChangeText={(e) => setIncident(e)}
        /> */}

<Text style={styles.text1}>Vehicle No</Text>
        {/* <TextInput
          value={incident}
          style={styles.TextInput}
          placeholder="Incident"
          onChangeText={(e) => setIncident(e)}
        /> */}

<Text style={styles.text1}>Owner Name</Text>
        {/* <TextInput
          value={incident}
          style={styles.TextInput}
          placeholder="Incident"
          onChangeText={(e) => setIncident(e)}
        /> */}

<Text style={styles.text1}>Passenger Name</Text>
        {/* <TextInput
          value={incident}
          style={styles.TextInput}
          placeholder="Incident"
          onChangeText={(e) => setIncident(e)}
        /> */}

<Text style={styles.text1}>Incident</Text>
        <TextInput
          value={incident}
          style={styles.TextInput}
          placeholder="Incident"
          onChangeText={onChangeIncidentName}

        />
        

        <Card.Divider color="black" style={{ height: 4, marginTop: 10 }} />

        <View style={styles.row}>
          <TouchableOpacity style={styles.resetBtn} onPress={resetData}>
            <Text style={styles.resetText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addBtn} onPress={AddIncident}>
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
    alignItems: "center",
  },
  icon: { fontSize: 35 },
  TextTitle1: {
    marginTop: 40,
    marginLeft: 10,
    fontSize: 40,
  },
  container1: {
    backgroundColor: "#D5BEFF",
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#D5BEFF",
    borderRadius: 25,
    height: "77%",
  },
  text1: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 15,
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
    borderWidth: 5,
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    borderColor: "#8B51F5",
    backgroundColor: "white",
  },
});
