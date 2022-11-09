import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Icon } from "@rneui/themed";
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
import { updatedata } from "./context/ContextProvider";
import { BASE_URL } from "../constants/Url.json";

export default function UpdateAction({ navigation, id }) {

  const { setUPdata } = useContext(updatedata);

  const [inpval, setINP] = useState({
    Action: "",
    
  });

  const setdata = (e) => {
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  // const { id } = useParams("");

  const getdata = async () => {
    const res = await fetch(BASE_URL + `/incident/view/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if (res.status === 422 || !data) {
      console.log("Please take the action");
      return 0;
    } else {
      setINP(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateaction = async (e) => {
    e.preventDefault();

    const { VehicleNo, OwnerName, PassengerName, Incident } = inpval;

    const res2 = await fetch(`http://192.168.92.248:8000/incident/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Action,
        
        
      }),
    });

    const data2 = await res2.json();

    if (res2.status === 422 || !data2) {
      alert("Please enter all action details");
    } else {
      alert("Update Action Details Successfully");
      navigate("/view");
      setUPdata(data2);
    }
  };

  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate("RequestList", {})}
        >
          <Icon name="chevron-left" color="black" iconStyle={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.TextTitle1}>Update Action</Text>
      </View>
<View>

</View>
      <Card.Divider color="black" />

      <View style={styles.container}>
      <View style={styles.TextTitle2}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Incident ID :</Text>
      </View>
      <View style={styles.TextTitle2}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Vehicle No :</Text>
      </View>
      <View style={styles.TextTitle2}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Owner Name :</Text>
      </View>
      <View style={styles.TextTitle2}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Passenger Name :</Text>
      </View>
      <View style={styles.TextTitle2}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Incident :</Text>
      </View>
      <View style={styles.TextTitle2}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Action</Text>
      
      <View style={styles.inputView}>
      
        <TextInput
          style={styles.TextInput}
          placeholder="Enter the Action"
          placeholderTextColor="#003f5c"
          value={inpval.Action}
          onChangeText={(Action) => setdata(Action)}
        />
      </View>
      </View>
      <View style={styles.fixToText} >
      <Button title='Back'></Button>
      <Button onClick={updateaction} title='Update'></Button>
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
    marginTop: 10
  },
});
