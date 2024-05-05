import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const MenuContainer = ({ title, imageSrc, type, setType }) => {
  const handlePress = () => {
    setType(title.toLowerCase());
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View
        style={[
          styles.imageContainer,
          type === title.toLowerCase() ? styles.activeContainer : null,
        ]}
      >
        <Image source={imageSrc} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  imageContainer: {
    width: 80,
    height: 80,
    padding: 10,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  activeContainer: {
    backgroundColor: "#E5E7EB",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  title: {
    color: "#00BCC9",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default MenuContainer;
