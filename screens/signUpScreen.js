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
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigation.reset({
            index: 0,
            routes: [{ name: "MainScreen" }],
          });
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <View style={stylesSignUp.container}>
      <ImageBackground
        source={require("../assets/bacckground.jpg")}
        style={stylesSignUp.backgroundImage}
      >
        <View style={stylesSignUp.centerContainer}>
          <Text style={stylesSignUp.title}>Sign Up</Text>
          {error ? <Text style={stylesSignUp.error}>{error}</Text> : null}
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={stylesSignUp.input}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={stylesSignUp.input}
            secureTextEntry={true}
          />
          <TextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={stylesSignUp.input}
            secureTextEntry={true}
          />
          <Pressable onPress={handleSignUp} style={stylesSignUp.button}>
            <Text style={stylesSignUp.buttonText}>Sign Up</Text>
          </Pressable>

          <View style={stylesSignUp.footer}>
            <Text>Already have an account?</Text>
            <Pressable onPress={() => navigation.navigate("SignIn")}>
              <Text style={stylesSignUp.link}>Sign in</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const stylesSignUp = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  centerContainer: {
    width: "80%", // Adjust the width as needed
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
    width: "110%",
    height: "110%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignUpScreen;
