import React from "react";
import { Card, Icon } from "@rneui/themed";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SearchBar from "react-native-dynamic-search-bar";

export default function RequestList({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity>
          <Icon name="chevron-left" color="black" iconStyle={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.TextTitle1}>Hi</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.TextTitle2}>Ride Request</Text>
        <TouchableOpacity onPress={() => navigation.navigate("AddRequest", {})}>
          <Icon
            name="add"
            color="#000000"
            iconStyle={{ marginLeft: 30, fontSize: 50 }}
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
        <TouchableOpacity>
          <View
            style={{
              borderWidth: 1,
              height: 150,
              margin: 15,
              backgroundColor: "#DFD8D7",
              borderColor: "#DFD8D7",
              borderRadius: 15,
            }}
          >
            <View
              style={{
                padding: 30,
              }}
            >
              <Text style={styles.text1}>Name :</Text>
              <Text style={styles.text2}>Location :</Text>
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
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
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
    marginRight: 250
  },
  TextTitle2: {
    padding: 0,
    marginLeft: 30,
    fontSize: 30,
  },
  text1: {
    fontWeight: "bold",
    fontSize: 25,
  },
  text2: {
    fontSize: 20,
  },
});
