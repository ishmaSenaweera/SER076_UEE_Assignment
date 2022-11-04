import React, { Component } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Register = ()=>{
    return (
        <SafeAreaView>
            <ScrollView>
                
                <View style={{padding:10}}>
                    
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput}
                         placeholder="First Name"/>
                    </View>

                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} 
                        placeholder="Last Name"/>
                    </View>

                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} 
                        placeholder= "Email Address"/>
                    </View>

                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} 
                        placeholder="Phone Number"/>
                    </View>

                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} 
                        placeholder="User Type"/>
                    </View>
                     
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput}
                        placeholder="Password" secureTextEntry={true}/>
                    </View>

                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} 
                        placeholder="Confirm Password" secureTextEntry={true}/>
                    </View>
                   
                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton}>
                            <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.formInput}>
                        <View style={{height:1,backgroundColor:'#ddd',width:'100%'}}></View>
                    </View>

                    <View style={styles.formInput}>
                        <TouchableOpacity>
                            <Text style={{color:"#4287f5",textAlign:'center',fontSize:16,fontWeight:'bold'}}>Already Have Account ? Login</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },defaultBg:{
        width:'100%',
        height:120
    },formInput:{
        marginTop:10,
        padding:10,
    },textInput:{
        padding:10,
        fontSize:16,
        borderWidth:1,
        borderColor:"#a7a7a7",
        borderRadius:10
    },defaultButton:{
        padding:15,
        backgroundColor:'#14b53f',
        borderRadius:10,
    }
});

export default Register;