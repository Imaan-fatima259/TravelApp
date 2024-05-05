import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { firestore } from "../firebase";

const Book = () => {
  const todoRef = collection(firestore, "newData");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateToVisit, setDateToVisit] = useState("");

  const addField = async () => {
    console.log("addField function called"); // Debugging statement

    if (name && name.trim() !== "") {
      const timestamp = serverTimestamp();
      const data = {
        name: name.trim(),
        phoneNumber: phoneNumber.trim(),
        dateToVisit: dateToVisit.trim(),
        createdAt: timestamp,
      };
      try {
        await addDoc(todoRef, data);
        setName("");
        setPhoneNumber("");
        setDateToVisit("");
        Keyboard.dismiss();
        alert("Booked successfully!");
      } catch (error) {
        console.error("Error adding document: ", error);
        alert("An error occurred while booking. Please try again later.");
      }
    } else {
      alert("Please enter your name.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View>
        <Text style={styles.title}>Book Now</Text>
        <Text style={styles.subtitle}>Enjoy your Beautiful Trip</Text>
        <View style={styles.imageContainer}>
          <Image source={require("../assets/1.png")} style={styles.image} />
        </View>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          onChangeText={(name) => setName(name)}
          value={name}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          onChangeText={(phone) => setPhoneNumber(phone)}
          value={phoneNumber}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter date to visit"
          onChangeText={(date) => setDateToVisit(date)}
          value={dateToVisit}
        />
        <TouchableOpacity style={styles.button} onPress={addField}>
          <Text style={styles.buttonText}>Book</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: "#063e44cf",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 36,
    color: "#527283",
    textAlign: "center",
    marginBottom: 20,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  formContainer: {
    width: "100%",
    padding: 20,

    // justifyContent: "center",
    borderWidth: 1, // Add border
    borderRadius: 10, // Add border radius for rounded corners
    borderColor: "#ccc", // Border color
    backgroundColor: "rgba(173, 216, 230, 0.7)",
  },
  input: {
    height: 40,
    borderRadius: 5,
    backgroundColor: "white",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    height: 47,
    borderRadius: 5,
    backgroundColor: "#063e44cf",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});

export default Book;
