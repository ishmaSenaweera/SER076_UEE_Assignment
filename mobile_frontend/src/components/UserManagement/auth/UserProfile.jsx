import { StatusBar } from "expo-status-bar";
import { useContext, useState,useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import axios from "axios";


export default function UserProfile() {

  const [userData, setUserData] = useState("");
 
  async function getData() {
    try {
      const result = await axios.get("");
      
      setUserData(result.data);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getData();
  }, []);

 
    
  return (
    <View style={styles.container}>
      <View style={styles.bar} />
      <Text style={styles.header}>Travel Buddy</Text>
      <Text style={styles.header2}>user profile</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        
      </View>
      <StatusBar style="auto" />
      <ScrollView>
     
     
      {userData ? (
            <view>
                {userData?.firstName} {userData?.lastName}
            </view>}
     
      
      <TouchableOpacity style={styles.loginBtn} onPress={delete}>
        <Text style={styles.loginText}>delete</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>  
    
  );}
  

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
      fontSize: 30,
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
      fontSize: 20,
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
      height: 20,
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