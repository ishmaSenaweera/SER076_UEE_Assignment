import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { Card, Button, Icon } from "@rneui/themed";
import axios from "axios";
import AuthContext from "../../context/UserContext";

export default function ViewIncident({ navigation, id }) {
  // const id = route.params.id;
  const { userId } = useContext(AuthContext);
  const [getincidentdata, setProductdata] = useState([]);
  const [units, setUnits] = useState(2);

  const getdata = async () => {
    try {
      await axios
        .get(`http://192.168.92.248:8000/incident/view/${id}`)
        .then((res) => {
          if (res.status === 201) {
            setProductdata(res.data);
            console.log(res.data);
          }
        });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate("RequestList", {})}
        >
          <Icon name="chevron-left" color="black" iconStyle={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.TextTitle1}>View Incident</Text>
      </View>
<View>

</View>
      <Card.Divider color="black" />

      <View style={styles.container}>
      <View style={styles.TextTitle2}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Indient ID : {getincidentdata.id}</Text>
      </View>
      <View style={styles.TextTitle2}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Vehicle No : {getincidentdata.VehicleNo}</Text>
      </View>
      <View style={styles.TextTitle2}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Owner Name : {getincidentdata.OwnerName}</Text>
      </View>
      <View style={styles.TextTitle2}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Passenger Name : {getincidentdata.PassengerName}</Text>
      </View>
      <View style={styles.TextTitle2}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Incident : {getincidentdata.Incident}</Text>
      </View>
      <View style={styles.TextTitle2}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Action : {getincidentdata.Action}</Text>
      </View>
      
      <View style={styles.fixToText} >
      <Button title='Back'></Button>
      <Button title='Update'></Button>
      </View>
      {/* <View style={styles.button2} >
      <Button title='Add'></Button>
      </View> */}
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
    marginTop: 40,
  },
  TextTitle2: {
    fontSize: 40,
    margin:20,
  },
  container: {
    backgroundColor: "#D5BEFF",
    margin: 20,
    borderWidth: 1,
    borderColor: "#D5BEFF",
    borderRadius: 25,
    height: "80%",
  },
  text1: {
    fontWeight: "bold",
    fontSize: 25,
  },
  text2: {
    fontSize: 20,
  },
  container1: {
    marginTop: 200,
    marginHorizontal: 20,
    elevation: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    fontSize: 50,
    fontWeight: "bold",
    alignItems: "center",
  },

  bar: {
    flex: 1,
    height: 3,
    backgroundColor: "grey",
    width: "20%",
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  header2: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    alignItems: "center",
  },

  inputView: {
    backgroundColor: "#dbd8d3",
    elevation: 20,
    borderColor: "#f2bc57",
    borderRadius: 10,
    width: "80%",
    height: 45,
    margin: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  loginBtn: {
    width: "70%",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8B51F5",
  },
  button1: {
    width: "40%",
    marginLeft: 70,
  },
  button2: {
    width: "20%",
    float: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 100,
    marginRight: 100,
    marginTop: 43
  },
});
