   
import React, { Component } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Login = ()=>{
   return (
        <SafeAreaView>
            <ScrollView>
            <Text style={styles.header}>Travel Buddy</Text>
            <Text style={styles.header2}>Login</Text>
                <View style={{padding:10,backgroundColor:'#fff'}}>
                    
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} 
                        placeholder="Your email address"/>
                    </View>

                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput}
                         placeholder="Password" secureTextEntry={true}/>
                    </View>

                    <View style={styles.formInput}>
                        <TouchableOpacity>
                            <Text style={{color:"#db2218",textAlign:'right',fontSize:16,fontWeight:'bold'}}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton}>
                            <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                   
                    
                    <View style={styles.formInput}>
                        <View style={{height:1,backgroundColor:'#ddd',width:'100%'}}></View>
                    </View>

                    <View style={styles.formInput}>
                        <TouchableOpacity>
                            <Text style={{color:"#14b53f",textAlign:'center',fontSize:16,fontWeight:'bold'}}>Need Account ? Register now</Text>
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
        backgroundColor:'#4287f5',
        borderRadius:10,
    }
});

export default Login;