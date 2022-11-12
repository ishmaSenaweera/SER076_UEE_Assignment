import { StatusBar } from "expo-status-bar";
import { useContext, useState } from "react";
import { Card, Icon } from "@rneui/themed";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";


export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  const login = async (e) => {
    e.preventDefault();
    try {
      
      const loginData = {
        email,
        password,
      };

      
      const result = await axios.post(
        "http://192.168.8.174:8000/user/login",
        loginData
      );

      
      if (result) {
        setType(result.data.type);
        console.log(result.data.type);
      }
    } catch (err) {
      
      alert(err.response.data.errorMessage);
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Travel Buddy</Text>
      <Text style={styles.header2}>Login</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.bar} />
      </View>
      <StatusBar style="auto" />
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
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={login}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      
         
          <TouchableOpacity>
            <Text style={{color:"#bb8de0",textAlign:'center',fontSize:16,fontWeight:'bold'}}>Need Account ? Register now</Text>
          </TouchableOpacity>
        
      
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      marginTop: 200,
      marginHorizontal: 20,
      elevation: 20,
      borderRadius: 10,
      backgroundColor: "#ebd9fa",
      alignItems: "center",
      justifyContent: "center",
    },
  
    header: {
      fontSize: 60,
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
      backgroundColor: "white",
      elevation: 20,
      borderColor: "#f2bc57",
      borderRadius: 10,
      width: "80%",
      height: 45,
      marginBottom: 20,
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
      backgroundColor: "#bb8de0",
    },
  });