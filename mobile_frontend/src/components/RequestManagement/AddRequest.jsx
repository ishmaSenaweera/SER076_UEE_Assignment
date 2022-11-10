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
import DateTimePicker from "@react-native-community/datetimepicker";
import { BASE_URL } from "../constants/Url.json";

export default function AddRequest({ navigation }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || deliveryDate;
    setDate(currentDate);
  };

  function handleDateOpen() {
    setIsOpen(true);
  }

  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate("RequestList", {})}
        >
          <Icon name="chevron-left" color="black" iconStyle={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.TextTitle1}>Request a Ride</Text>
      </View>
      <Card.Divider color="black" style={{ height: 4 }} />
      <View style={styles.container1}>
        <Text style={styles.text1}>Ride Details</Text>
        <Text style={styles.text2}>From</Text>
        <TextInput
          value={from}
          style={styles.TextInput}
          onChangeText={(location1) => setFrom(location1)}
        />
        <Text style={styles.text2}>To</Text>
        <TextInput
          value={to}
          style={styles.TextInput}
          onChangeText={(location2) => setTo(location2)}
        />
        <Text style={styles.text2}>Time?</Text>
        <TouchableOpacity onPress={handleDateOpen}>
          <Text style={styles.TextInput}>{deliveryDate.toDateString()}</Text>
        </TouchableOpacity>
        {isOpen === true ? (
          <DateTimePicker
            value={deliveryDate}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={changeSelectedDate}
          />
        ) : (
          ""
        )}
        <Text style={styles.text2}>Seats Needed?</Text>
        <Text style={styles.TextInput}></Text>

        <TouchableOpacity style={styles.reqBtn}>
          <Text style={styles.reqText}>Request</Text>
        </TouchableOpacity>
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
    margin: 10,
    borderWidth: 1,
    borderColor: "#D5BEFF",
    borderRadius: 25,
    height: "83%",
  },
  text1: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 10,
  },
  text2: {
    fontSize: 20,
    padding: 10,
  },
  reqBtn: {
    width: "60%",
    borderRadius: 25,
    marginTop: 25,
    marginLeft: 70,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8B51F5",
  },
  reqText: {
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
