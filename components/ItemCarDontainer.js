import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ItemCarDontainer = ({ imageSrc, title, location, data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ItemScreen", {
          imageUrl: data?.photo?.images?.medium?.url,
          param: data,
        })
      }
      style={styles.container}
    >
      <Image source={{ uri: imageSrc }} style={styles.image} />

      {title ? (
        <>
          <Text style={styles.title}>
            {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
          </Text>

          <View style={styles.locationContainer}>
            <FontAwesome name="map-marker" size={20} color="#8597A2" />
            <Text style={styles.location}>
              {location?.length > 18 ? `${location.slice(0, 18)}..` : location}
            </Text>
          </View>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    width: 182,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 5,
    marginBottom: 5,
  },
  title: {
    color: "#428288",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    color: "#428288",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default ItemCarDontainer;
