import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Discover from "./discover";
import ItemScreen from "./itemScreen";
import Book from "./book";

const Stack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Discover" component={Discover} />
      <Stack.Screen name="ItemScreen" component={ItemScreen} />
      <Stack.Screen name="Book" component={Book} />
    </Stack.Navigator>
  );
};

export default MainScreen;
