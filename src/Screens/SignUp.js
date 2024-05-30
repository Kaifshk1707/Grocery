import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomTextInput from "./../Common/CustomTextInput";
import CommonButton from "./../Common/CommonButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [badName, setBadName] = useState(false);
  const [email, setEmail] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [number, setNumber] = useState("");
  const [badNumber, setBadNumber] = useState(false);
  const [password, setPassword] = useState("");
  const [badPassword, setBadPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [badConfirmPassword, setBadConfirmPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const Signup = () => {
    setDisabled(true);
    if (name === "") {
      setBadName(true);
    } else {
      setBadName(false);
      if (email === "") {
        setBadEmail(true);
      } else {
        setBadEmail(false);
        if (number === "") {
          setBadNumber(true);
        } else if (number.length < 10) {
          setBadNumber(true);
        } else {
          setBadNumber(false);
          if (password === "") {
            setBadPassword(true);
          } else {
            setBadPassword(false);
            if (confirmPassword === "") {
              setBadConfirmPassword(true);
            } else {
              setBadConfirmPassword(false);
              if (password !== confirmPassword) {
                setBadConfirmPassword(true);
              } else {
                setBadConfirmPassword(false);
                saveData();
              }
            }
          }
        }
      }
    }
    setDisabled(false); // Reset the button state after validation
  };

  const saveData = async () => {
    await AsyncStorage.setItem("NAME", name);
    await AsyncStorage.setItem("EMAIL", email);
    await AsyncStorage.setItem("NUMBER", number);
    await AsyncStorage.setItem("PASSWORD", password);
    navigation.goBack();
    console.log("Data saved successfully");
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Image source={require("./../images/2.png")} style={styles.image} />
      <Text style={styles.text}>Create New Account</Text>

      <CustomTextInput
        placeholder={"Enter your Name"}
        icon={require("./../images/user.png")}
        value={name}
        onChangeText={(txt) => setName(txt)}
      />
      {badName && <Text style={styles.errorText}>Enter your name</Text>}

      <CustomTextInput
        placeholder={"Enter your Email"}
        icon={require("./../images/mail.png")}
        value={email}
        onChangeText={(txt) => setEmail(txt)}
      />
      {badEmail === true && ( <Text style={styles.errorText}>Enter your email</Text>)}

      <CustomTextInput
        keyboardType={"number-pad"}
        placeholder={"Enter your Number"}
        icon={require("./../images/number.png")}
        value={number}
        onChangeText={(txt) => setNumber(txt)}
      />
      {badNumber && <Text style={styles.errorText}>Enter valid number</Text>}

      <CustomTextInput
        placeholder={"Password"}
        icon={require("./../images/lock.png")}
        value={password}
        onChangeText={(txt) => setPassword(txt)}
      />
      {badPassword && (
        <Text style={styles.errorText}>Please Enter Password</Text>
      )}

      <CustomTextInput
        placeholder={"Confirm Password"}
        icon={require("./../images/lock.png")}
        value={confirmPassword}
        onChangeText={(txt) => setConfirmPassword(txt)}
      />
      {badConfirmPassword && (
        <Text style={styles.errorText}>Please Correct password</Text>
      )}

      <CommonButton
        title={"Sign Up"}
        textColor={"#fff"}
        onPress={Signup} // Note: Here we pass the function reference
        disabled={disabled}
        bgColor={disabled ? "gray" : "#000"}
      />

      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={styles.text2}>Already have an Account!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 60,
  },
  text: {
    marginTop: 30,
    alignSelf: "center",
    fontSize: 27,
    fontWeight: "bold",
    color: "black",
  },
  errorText: {
    marginTop: 10,
    alignSelf: "center",
    color: "red",
  },
  text2: {
    fontSize: 18,
    alignSelf: "center",
    marginTop: 8,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
});

export default SignUp;
