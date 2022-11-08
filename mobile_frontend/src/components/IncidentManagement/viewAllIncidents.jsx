import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { CardList } from "react-native-card-list";
import { deldata } from "./context/ContextProvider";
import { Text, Card, Button, Icon } from "@rneui/themed";
import SearchBar from "react-native-dynamic-search-bar";

function ViewAllIncidents({ navigation }) {
  const [getincidentdata, setIncidentdata] = useState([]);

  const { setDLTdata } = useContext(deldata);
  const [searchTerm, setSearchTerm] = useState("");
  // const navigate = useNavigate();

  const getdata = async () => {
    const res = await fetch(`http://192.168.92.248:8000/incident/view`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if (res.status === 422 || !data) {
      console.log(data);
    } else {
        console.log(data);
      setIncidentdata(data);
    }
  };

  useEffect(() => {
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <View style={{ marginTop: 40 }}>
        
        <Text
          style={{
            color: "black",
            marginLeft: 10,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          All Incidents
        </Text>
      </View>
      <View style={{ margin: 10, backgroundColor: "white" }}>
        <SearchBar
          type="search"
          placeholder="Search"
          onChange={(incident) => {
            setSearchTerm(incident.target.value);
          }}
        />
      </View>
      <ScrollView style={{ marginBottom: 80 }}>
      <View style={styles.item}>
        
          {getincidentdata.map((element, id) => {
              return (
                <Card key={id}>
                  <Card.Divider />
                  
                  <Text style={{ marginBottom: 10, fontSize: 20 }}>
                    Incident ID : I{id+1000}
                  </Text>
                  
                  <View style={styles.fixToText} >
      <Button title='Remove' 
      onPress={() =>
        navigation.navigate("ViewAllIncidents", { screen: "ViewAllIncidents" })
      }
      ></Button>
      <Button style={{color: '#ed5209'}} title='Take Action'></Button>
      </View>
                  {/* <Button
                    icon={
                      <Icon
                        name="code"
                        color="#ffffff"
                        iconStyle={{ marginRight: 10 }}
                      />
                    }
                    onPress={() =>
                      navigation.navigate("", {
                        id: element._id,
                      })
                    }
                    buttonStyle={{
                      borderRadius: 0,
                      marginLeft: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      width: "50%",
                    }}
                  /> */}
                </Card>
              );
            })}
        
      </View>
      </ScrollView>
    </>
  );
}

export default ViewAllIncidents;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    margin: "10%",
    backgroundColor: "#F5FCFF",
    float: "left",
    width: "30%",
  },

  container1: {
    justifyContent: "center",
    margin: "10%",
    backgroundColor: "#F5FCFF",
    float: "right",
    width: "30%",
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 50,
    marginTop: 43
  },
});
