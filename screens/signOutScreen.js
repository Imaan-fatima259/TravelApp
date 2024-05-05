import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { auth } from "../firebase";

const SignOutScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "SignIn" }],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={stylesSignOut.container}>
      <ImageBackground
        source={{
          uri: "https://img.freepik.com/free-photo/full-shot-woman-travel-concept_23-2149153259.jpg?t=st=1714896874~exp=1714900474~hmac=2873a4aa49c8c80e2499eb966ef0b54e4238350aa5e9ecd40e61bf5e9f44c990&w=360",
        }}
        style={stylesSignOut.backgroundImage}
      >
        <View style={stylesSignOut.textContainer}>
          <Text style={stylesSignOut.title}>SIGN OUT</Text>
          <Text style={stylesSignOut.message}>
            Are you sure you want to sign out?
          </Text>
        </View>
        <Pressable onPress={handleSignOut} style={stylesSignOut.button}>
          <Text style={stylesSignOut.buttonText}>Sign Out</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const stylesSignOut = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1, // Add border
    borderRadius: 10, // Add border radius for rounded corners
    borderColor: "#ccc", // Border color
    backgroundColor: "#B6EBFC",
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#3498db",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignOutScreen;
