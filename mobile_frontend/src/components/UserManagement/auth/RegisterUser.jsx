import { StatusBar } from "expo-status-bar";
import { useContext, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import axios from "axios";


export default function Register() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [userType, setUserType] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [loading, setLoading] = useState(false);
 
  const register = async (e) => {
    e.preventDefault();
    try {
     
      setLoading(true);

     
      const RegisterData = {
        firstName:firstName,
        lastName:lastName,
        email:email,
        dob:dob,
        mobile:mobile,
        userType:userType,
        password:password,
      };

      console.log(RegisterData);

      
      const result = await axios.post(
        "http://192.168.8.174:8000/user/register",
        RegisterData
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
    <View style={styles.container}>
      <View style={styles.bar} />
      <Text style={styles.header}>Travel Buddy</Text>
      <Text style={styles.header2}>Register</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        
      </View>
      <StatusBar style="auto" />
      <ScrollView>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
          placeholderTextColor="#003f5c"
          onChangeText={(firstName) => setFirstName(firstName)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name"
          placeholderTextColor="#003f5c"
          onChangeText={(lastName) => setLastName(lastName)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone"
          placeholderTextColor="#003f5c"
          onChangeText={(mobile) => setMobile(mobile)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Date of Birth"
          placeholderTextColor="#003f5c"
          onChangeText={(dob) => setDob(dob)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="User Type"
          placeholderTextColor="#003f5c"
          onChangeText={(userType) => setUserType(userType)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Re-password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(passwordVerify) => setPasswordVerify(passwordVerify)}
        />
      </View>
      <View style={{marginBottom:"100px"}}>
      <TouchableOpacity style={styles.registerBtn} onPress={register}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
    </View>  
    
  );
  
}
      const styles = StyleSheet.create({
      container: {
      marginTop: 70,
      marginHorizontal: 20,
      elevation: 20,
      borderRadius: 10,
      backgroundColor: "#ebd9fa",
      alignItems: "center",
      justifyContent: "center",
    },
  
    header: {
      fontSize: 20,
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
      fontSize: 14,
      fontWeight: "bold",
      marginBottom: 10,
      alignItems: "center",
    },
  
    inputView: {
      backgroundColor: "white",
      elevation: 20,
      borderColor: "#f2bc57",
      borderRadius: 10,
      width: "80%",
      height: 45,
      marginBottom: 20,
    },
  
    TextInput: {
      height: 15,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
  
    registerBtn: {
      width: "70%",
      borderRadius: 10,
      marginTop: 10,
      marginBottom: 20,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#bb8de0",
    },
  });