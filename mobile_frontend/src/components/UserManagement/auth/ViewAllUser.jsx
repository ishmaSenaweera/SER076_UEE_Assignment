import React, { useEffect, useState } from "react";
import { Card, Icon } from "@rneui/themed";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";
import SearchBar from "react-native-dynamic-search-bar";

export default function ViewAllUser({ navigation }) {
  const [viewAllUser, setViewAllUser] = useState([]);

  async function getUserData() {
    try {
      await axios.get("http://192.168.8.174:8000/user/getAll").then((res) => {
        if (res.status === 200) {
          setViewAllUser(res.data);
        }
      });
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.TextTitle1}>Hi</Text>
      <View style={styles.row}>
        <Text style={styles.TextTitle2}>User List</Text>
        <TouchableOpacity onPress={() => navigation.navigate("AddUser", {})}>
          <Icon
            name="add"
            color="#000000"
            iconStyle={{ marginLeft: 130, fontSize: 30 }}
          />
        </TouchableOpacity>
      </View>
      <Card.Divider color="black" style={{ height: 4 }} />
      <ScrollView
        style={{
          height: "70%",
          margin: 10,
          backgroundColor: "#D5BEFF",
          borderRadius: 25,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("UserInfo", {})}
        >
          <View
            style={{
              borderWidth: 5,
              height: 60,
              margin: 15,
              backgroundColor: "#B48FF8",
              borderColor: "#8B51F5",
              borderRadius: 15,
              padding: 10,
            }}
          >
            <View style={styles.row}>
              <Text style={styles.text1}>Name :</Text>
              <Text style={styles.text2}>UserType :</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D5BEFF",
    margin: 15,
    borderWidth: 1,
    borderColor: "#D5BEFF",
    borderRadius: 25,
    height: "70%",
    padding: 0,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  icon: { marginTop: 10, marginRight: 20, fontSize: 35 },
  TextTitle1: {
    padding: 0,
    fontSize: 30,
    marginLeft: 50,
  },
  TextTitle2: {
    padding: 0,
    marginLeft: 50,
    fontSize: 30,
  },
  text1: {
    fontSize: 25,
  },
  text2: {
    fontSize: 15,
    marginLeft: 90,
  },
});
