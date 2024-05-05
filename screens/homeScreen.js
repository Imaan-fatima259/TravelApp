import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons"; // Import AntDesign icons
import SignOutScreen from "./signOutScreen";
import MainScreen from "./MainScreen"; // Import the stack navigator

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home"; // Icon for Home tab
          } else if (route.name === "Signout") {
            iconName = "logout"; // Icon for Signout tab
          }

          // Return the appropriate icon component
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Signout" component={SignOutScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
