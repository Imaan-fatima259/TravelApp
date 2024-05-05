import React from "react";
import {
  View,
  Pressable,
  StyleSheet,
  ImageBackground,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const FirstScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Logic for handling login
    navigation.navigate("SignIn");
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={stylesFirst.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={stylesFirst.backgroundImage}
      >
        <View style={stylesFirst.content}>
          <Text style={stylesFirst.titleText}>Tour Vista </Text>
          <View style={stylesFirst.buttonContainer}>
            <Pressable style={stylesFirst.button} onPress={handleLogin}>
              <Text style={stylesFirst.buttonText}>Login</Text>
            </Pressable>
            <Pressable style={stylesFirst.button} onPress={handleSignUp}>
              <Text style={stylesFirst.buttonText}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const stylesFirst = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Set your desired background color
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // Other styles for your content container
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginBottom: 0,
    marginTop: 500,
    marginRight: 50,
    // Other styles for your button container
  },
  button: {
    backgroundColor: "rgba(173, 216, 230, 0.7)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    padding: 5,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 54,
    fontWeight: "bold",
    color: "black", // Text color
    marginBottom: 20, // Adjust as needed
  },
});

export default FirstScreen;
