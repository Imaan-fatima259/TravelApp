import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ItemScreen = ({ route }) => {
  const navigation = useNavigation();

  const data = route?.params?.param;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const imageUrl = route?.params?.imageUrl;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: imageUrl
                ? imageUrl
                : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg",
            }}
            style={styles.image}
          />

          <View style={styles.iconRow}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Discover")}
              style={styles.iconButton}
            >
              <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.title}>{data?.name}</Text>
          <View style={styles.locationRow}>
            <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
            <Text style={styles.location}>{data?.location_string}</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <View style={styles.ratingCircle}>
              <FontAwesome name="star" size={24} color="#D58574" />
            </View>
            <View>
              <Text style={styles.statValue}>{data?.ratings}</Text>
              <Text style={styles.statLabel}>Ratings</Text>
            </View>
          </View>

          <View style={styles.statItem}>
            <View style={styles.ratingCircle}>
              <MaterialIcons name="attach-money" size={24} color="black" />
            </View>
            <View>
              <Text style={styles.statValue}>{data?.price}</Text>
              <Text style={styles.statLabel}>Price Level</Text>
            </View>
          </View>

          <View style={styles.statItem}>
            <View style={styles.ratingCircle}>
              <FontAwesome5 name="map-signs" size={24} color="black" />
            </View>
            <View>
              <Text style={styles.statValue}>{data?.bearing}</Text>
              <Text style={styles.statLabel}>Bearing</Text>
            </View>
          </View>
        </View>

        <Text style={styles.description}>{data?.description}</Text>

        <View style={styles.cuisineContainer}>
          {data?.cuisine &&
            data?.cuisine.map((n) => (
              <TouchableOpacity key={n.key} style={styles.cuisineButton}>
                <Text>{n.name}</Text>
              </TouchableOpacity>
            ))}
        </View>

        <View style={styles.contactContainer}>
          <View style={styles.contactRow}>
            <FontAwesome name="phone" size={24} color="#428288" />
            <Text style={styles.contactText}>{data?.phone}</Text>
          </View>
          <View style={styles.contactRow}>
            <FontAwesome name="envelope" size={24} color="#428288" />
            <Text style={styles.contactText}>{data?.email}</Text>
          </View>
          <View style={styles.contactRow}>
            <FontAwesome name="map-pin" size={24} color="#428288" />
            <Text style={styles.contactText}>{data?.address}</Text>
          </View>

          <View style={styles.bookButtonContainer}>
            <TouchableOpacity
              style={styles.bookButton}
              onPress={() => navigation.navigate("Book")}
            >
              <Text style={styles.bookButtonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    position: "relative",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  imageContainer: {
    position: "relative",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
    marginBottom: 24,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 20,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceLevel: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFF",
  },
  price: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
    marginLeft: 8,
  },
  openNow: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: "#81E6D9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#428288",
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  location: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8C9EA6",
    marginLeft: 8,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#FFC7C7",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  statValue: {
    color: "#515151",
  },
  statLabel: {
    color: "#515151",
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#97A6AF",
    marginBottom: 16,
  },
  cuisineContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  cuisineButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#C6F6D5",
    marginRight: 8,
    marginBottom: 8,
  },
  contactContainer: {
    backgroundColor: "#F3F4F6",
    padding: 16,
    borderRadius: 20,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  contactText: {
    fontSize: 18,
    marginLeft: 8,
  },
  bookButton: {
    backgroundColor: "#06B2BE",
    padding: 16,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  bookButtonText: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#FFF",
  },
  bookButtonContainer: {
    backgroundColor: "#F3F4F6",
    padding: 16,
    borderRadius: 20,
    marginBottom: 20, // Add some marginBottom here
  },
});

export default ItemScreen;
