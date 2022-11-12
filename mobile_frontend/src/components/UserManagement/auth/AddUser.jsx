import React, { useState } from "react";
import { Card, Icon } from "@rneui/themed";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";


export default function AddUser({ navigation }) {


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [userType, setUserType] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [loading, setLoading] = useState(false);
 
  const adduser = async (e) => {
    e.preventDefault();
    try {
     
      setLoading(true);

     
      const UserData = {
        firstName:firstName,
        lastName:lastName,
        email:email,
        dob:dob,
        mobile:mobile,
        userType:userType,
        password:password,
      };

      console.log(UserData);

      
      const result = await axios.post(
        "http://192.168.8.174:8000/user/register",
        UserData
      );

      if (result) {
        setType(result.data.type);
        console.log(result.data.type, "Success");
        console.log(result.data.type);
      }
    } catch (err) {
    setLoading(false);
    alert(err.response.data.errorMessage);
    console.log(err);
    
     }
  };

  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ViewAllUser", {})}
        >
          <Icon name="chevron-left" color="black" iconStyle={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.TextTitle1}>Add New User</Text>
      </View>
      <Card.Divider color="black" style={{ height: 4 }} />
      <View style={styles.container1}>
        <Text style={styles.text1}>First Name</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
          placeholderTextColor="#003f5c"
          onChangeText={(firstName) => setFirstName(firstName)}
        />
        <Text style={styles.text1}>Last Name</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name"
          placeholderTextColor="#003f5c"
          onChangeText={(lastName) => setLastName(lastName)}
        />
        <Text style={styles.text1}>Email</Text>
        <TextInput
         style={styles.TextInput}
         placeholder="Email"
         placeholderTextColor="#003f5c"
         onChangeText={(email) => setEmail(email)}
        />
        <Text style={styles.text1}>Phone</Text>
        <TextInput
           style={styles.TextInput}
           placeholder="Phone"
           placeholderTextColor="#003f5c"
           onChangeText={(mobile) => setMobile(mobile)}
        />
        <Text style={styles.text1}>Date of Birth</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Date of Birth"
          placeholderTextColor="#003f5c"
          onChangeText={(dob) => setDob(dob)}
        />
        <Text style={styles.text1}>User Type</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="User Type"
          placeholderTextColor="#003f5c"
          onChangeText={(userType) => setUserType(userType)}
        />
        <Text style={styles.text1}>Password</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <Text style={styles.text1}>Password</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Re-password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(passwordVerify) => setPasswordVerify(passwordVerify)}
        />

        <View style={styles.row}>
          <TouchableOpacity style={styles.addBtn}>
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
