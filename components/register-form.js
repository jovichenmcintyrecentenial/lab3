import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Switch, TouchableOpacity  } from 'react-native';

export default class RegistationForm extends React.Component{

    state = {firstName:'',
    lastName:'',
    email:'',
    password:''}

    setStateFName = (text) => this.setState({firstName : text});
    setStateLName = (text) => this.setState({lastName : text});
    setStateEmail = (text) => this.setState({email : text});
    setStatePassword = (text) => this.setState({password : text});


    clear = () =>
        this.setState({firstName:'',
        lastName:'',
        email:'',
        password:''})

    displayAlert = () => alert(this.state.firstName+" "+this.state.lastName+ "\n"+this.state.email)
    

    render(){



      return(<View style={styles.regform}>
        <Text style={styles.header}>Registation Form</Text>
        <TextInput value={this.state.firstName} style={styles.textinput} onChangeText={(text)=>this.setStateFName(text)} placeholder="Enter your First Name"></TextInput>
        <TextInput value={this.state.lastName} style={styles.textinput} onChangeText={(text)=>this.setStateLName(text)} placeholder="Enter your Last Name"></TextInput>
        <TextInput value={this.state.email} style={styles.textinput} onChangeText={(text)=>this.setStateEmail(text)}  placeholder="Enter your Email"></TextInput>
        <TextInput value={this.state.password}  secureTextEntry={true} onChangeText={(text)=>this.setStatePassword(text)} style={styles.textinput} placeholder="Enter your password"></TextInput>
        <TouchableOpacity onPress={()=>this.displayAlert()} style={styles.button}>
            <Text style={styles.btntext}>Submit </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.clear()} style={styles.button}>
            <Text style={styles.btntext}>Clear </Text>
        </TouchableOpacity>
        </View>)
    }
  
  }

  const styles = StyleSheet.create({
    regform: {
    alignSelf:'stretch',
    marginLeft:10,
    marginRight:10,
    },
    header: {
    color: '#fff',
    fontSize: 24,
    paddingBottom: 10,
    backgroundColor: '#199187',
    alignItems: 'center',
    marginBottom: 40,
    },
    textinput:{
    alignSelf:'stretch',
    height: 40,
    marginBottom: 30,
    color:'#000',
    borderBottomColor:'#f8f8f8',
    borderBottomWidth: 1,
    },
    button:{
    alignSelf:'stretch',
    alignItems:'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 10,
    },
    btntext: {
    color: '#fff',
    fontWeight: 'bold',
    },
    });