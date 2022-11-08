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
import { BASE_URL } from "../constants/Url.json";

export default function RequestList({ navigation }) {
  const [requestList, setRequestList] = useState([]);

  async function getRequestData() {
    try {
      await axios.get("http://192.168.1.5:8000/request/getAll").then((res) => {
        if (res.status === 200) {
          setRequestList(res.data);
        }
      });
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }

  useEffect(() => {
    getRequestData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.TextTitle1}>Hi</Text>
      <View style={styles.row}>
        <Text style={styles.TextTitle2}>Ride Request</Text>
        <TouchableOpacity onPress={() => navigation.navigate("AddRequest", {})}>
          <Icon
            name="add"
            color="#000000"
            iconStyle={{ marginLeft: 60, fontSize: 30 }}
          />
        </TouchableOpacity>
      </View>
      <Card.Divider color="black" />
      <View style={{ margin: 10 }}>
        <SearchBar
          type="search"
          placeholder="Search By Location"
          // onChangeText={(order) => {
          //   searchOrder(order);
          // }}
          // onClearPress={getAllOrder}
        />
      </View>
      <ScrollView style={{ height: "58%", marginBottom: 10 }}>
        {requestList.map((element, index) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ViewRequestInfo", {})}
            >
              <View
                key={index}
                style={{
                  borderWidth: 1,
                  height: 100,
                  margin: 15,
                  backgroundColor: "#DFD8D7",
                  borderColor: "#DFD8D7",
                  borderRadius: 15,
                }}
              >
                <View style={{ padding: 10 }}>
                  <Text style={styles.text1}>
                    Name :{" "}
                    {element.passenger.firstName +
                      " " +
                      element.passenger.lastName}
                  </Text>
                  <Text style={styles.text2}>Location : {element.locationTo}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D5BEFF",
    margin: 20,
    borderWidth: 1,
    borderColor: "#D5BEFF",
    borderRadius: 25,
    height: "85%",
    padding: 0,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
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
    marginLeft: 20,
    fontSize: 30,
  },
  text1: {
    fontWeight: "bold",
    fontSize: 20,
  },
  text2: {
    fontSize: 15,
  },
});
