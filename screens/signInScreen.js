import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        navigation.reset({
          index: 0,
          routes: [{ name: "HomeScreen" }],
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <View style={stylesSignIn.container}>
      <ImageBackground
        source={require("../assets/bacckground.jpg")}
        style={stylesSignIn.backgroundImage}
      >
        <View>
          <Text style={stylesSignIn.mainHeading}> Tour Vista</Text>
        </View>
        <View style={stylesSignIn.centerContainer}>
          <Text style={stylesSignIn.title}>Sign In</Text>
          {error ? <Text style={stylesSignIn.error}>{error}</Text> : null}
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={stylesSignIn.input}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={stylesSignIn.input}
            secureTextEntry={true}
          />
          <Pressable onPress={handleSignIn} style={stylesSignIn.button}>
            <Text style={stylesSignIn.buttonText}>Sign In</Text>
          </Pressable>
          <View style={stylesSignIn.footer}>
            <Text>Don't have an account?</Text>
            <Pressable onPress={() => navigation.navigate("SignUp")}>
              <Text style={stylesSignIn.link}>Sign up</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const stylesSignIn = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainHeading: {
    marginTop: -78,
    fontSize: 64,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#E9DCC9",
  },
  centerContainer: {
    width: "80%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1, // Add border
    borderRadius: 10, // Add border radius for rounded corners
    borderColor: "#ccc", // Border color
    backgroundColor: "rgba(173, 216, 230, 0.7)", // Semi-transparent background color
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "grey",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: 20,
  },
  footer: {
    marginTop: 20,
  },
  link: {
    color: "blue",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default SignInScreen;
