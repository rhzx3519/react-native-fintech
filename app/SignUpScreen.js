import React from "react";
import { View, Text, TextInput } from "react-native";
import { defaultStyles } from "../constants/Styles";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const SignUpScreen = () => {
  const onSignup = async () => {};

  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Let's get started!</Text>
      <Text style={defaultStyles.descriptionText}>
        Enter your phone number. We will send you a confirmation code there.
      </Text>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
   inputContainer: {
    marginVertical: 40,
    flexDirection: 'row',
   },
   input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
   }
});

export default SignUpScreen;