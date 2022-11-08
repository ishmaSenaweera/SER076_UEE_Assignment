import React, { useState } from 'react'
import axios from "axios";
import { Button, Card, Icon } from "@rneui/themed";
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";

const AddIncident = ({navigation}) => {

  

  const [inpval, setINP] = useState({
    // VehicleNo: "",
    // OwnerName: "",
    // PassengerName: "",
    Incident: "",
    
  })

  const addinpdata = async (e) => {
    e.preventDefault();
    const data = {
      // VehicleNo: inpval.VehicleNo,
      // OwnerName: inpval.OwnerName,
      // PassengerName: inpval.PassengerName,
      Incident: inpval.Incident,
    }

    axios.post("http://192.168.92.248:8000/incident/new", data).then(()=>{

      if(data){
        alert("Add Incident Details Successfully");
      
      }
      }).catch((err)=>{
        if (!inpval.Incident) {
          alert("Please enter all incident details")
          
      }else{
        alert(err);
      }
      })
    }
    const setdata = (e) => {
      setINP({...inpval, [e.target.name]: e.target.value});
  }

  // const handlePhoto = (e) => {
  //   setINP({...inpval, Image: e.target.files[0]});
  // }

  return (
//     <div style={{ marginLeft: "100px", marginTop: "10px", marginBottom: "100px" }}>
//       <Container>
//         <Modal
//         dialogClassName="my-modal"
//         show={true}
//         onHide={props.handleModalClose}
//         backdrop="static"
//       >
//         <a href='/'><Modal.Header closeButton></Modal.Header></a>
//         <Modal.Title style={{ textAlign: "center" }}>Add Product</Modal.Title>
//         <br></br>
        
//         <Modal.Body>
//         <form className="formCard" border="dark">
//           <Row className="justify-content-md-center">
            
//               <Form.Group className="mb-3">
//                 <Form.Label>Product Code :</Form.Label>
//                 <input
//                 class="border border-warning"
//                   placeholder="Enter Product Code"
//                   type='text'
//                   value={inpval.VehicleNo} onChange={setdata} name="VehicleNo"
//                   style={{width:"700px", marginLeft:"25px", borderRadius:"10px"}}
//                 />
//               </Form.Group>
//               </Row>
//               <Row className="justify-content-md-center">
//               <Form.Group className="mb-3">
//                 <Form.Label>Product Name :</Form.Label>
//                 <input
//                 class="border border-warning"
//                   placeholder="Enter Product Name"
//                   type='text'
//                   value={inpval.OwnerName} onChange={setdata} name="OwnerName"
//                   style={{width:"700px", marginLeft:"20px", borderRadius:"10px"}}
//                 />
//               </Form.Group>
//               </Row>
//               <Row className="justify-content-md-center">
//               <Form.Group className="mb-3">
//                 <Form.Label>PassengerName :</Form.Label>
//                 <input
//                 class="border border-warning"
//                   placeholder="Enter Product PassengerName"
//                   type='text'
//                   as="textarea"
//                   rows={8}
//                   value={inpval.PassengerName} onChange={setdata} name="PassengerName"
//                   style={{width:"700px", marginLeft:"43px", borderRadius:"10px"}}
//                 />
//               </Form.Group>
//               </Row>

//               <Row className="justify-content-md-center">
//                 <Col>
//               <Form.Group className="mb-3">
              
//                 <Form.Label>Incident :</Form.Label>
//                 <input
//                 class="border border-warning"
//                   placeholder="Enter Incident"
//                   type='text'
//                   value={inpval.Incident} onChange={setdata} name="Incident"
//                   style={{width:"300px", marginLeft:"97px", borderRadius:"10px"}}
//                 />
                
//                 </Form.Group>
//                 </Col>
                
//               </Row>

//               <Row className="justify-content-md-center">
                
              
//               </Row>
              
              

              

//               <Row className="justify-content-md-center">
// <Col>
// <Button
//                 variant="outline-warning"
//                 size="lg"
//                 type="submit"
//                 style={{ width: "56%", marginLeft: "120px" }}
//                 onClick={addinpdata}
//               >
//                 Add Product
//               </Button>

              
           
              

//               </Col>

              

      
// <Col>
// <a href="/"><Button variant="outline-warning" size="lg" style={{ width: "56%", marginLeft: "5px" }}>
//                 Cancel
//               </Button></a>
//               </Col>
//             </Row>

            
          
//         </form>

        

//         </Modal.Body>
//         </Modal>
//       </Container>
//     </div>
<View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate("RequestList", {})}
        >
          <Icon name="chevron-left" color="black" iconStyle={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.TextTitle1}>Take Action</Text>
      </View>
<View>

</View>
      <Card.Divider color="black" />

      <View style={styles.container}>
      <View style={styles.TextTitle2}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Incident ID</Text>
      </View>
      <View style={styles.TextTitle2}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Vehicle No</Text>
      </View>
      <View style={styles.TextTitle2}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Owner Name</Text>
      </View>
      <View style={styles.TextTitle2}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Passenger Name</Text>
      </View>
      <View style={styles.TextTitle2}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Incident</Text>
      </View>
      
        
      
      <View style={styles.inputView}>
      
        <TextInput
          style={styles.TextInput}
          placeholder="Enter the Action"
          placeholderTextColor="#003f5c"
          // onChangeText={(Action) => setdata(Action)}
           onChange={(Incident) => setdata(Incident)}
        />
      </View>
      
      <View style={styles.fixToText} >
      <Button title='Back' 
      onPress={() =>
        navigation.navigate("ViewAllIncidents", { screen: "ViewAllIncidents" })
      }
      ></Button>
      {/* <Button title='Add' onPress={addinpdata}></Button> */}
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={addinpdata}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      {/* <View style={styles.button2} >
      <Button title='Add'></Button>
      </View> */}
      </View>
    </View>
  )
}
export default AddIncident;

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