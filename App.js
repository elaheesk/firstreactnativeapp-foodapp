// import React from "react";
// import "react-native-gesture-handler";
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./src/components/Header";
import Categories from "./src/components/Categories";
import Restaurants from "./src/components/Restaurants";
import Search from "./src/components/Search";
import { useEffect, useState } from "react";
import useRestaurants from "./src/hooks/useRestaurants";
// import HomeScreen from "./src/screens/HomeScreen";
// import RestaurantScreen from "./src/screens/RestaurantScreen";

// const Stack = createNativeStackNavigator();

export default function App() {
  const [term, setTerm] = useState("Burger");
  const commonCategories = [
    { name: "Burger", imageUrl: require("./src/assets/images/burger.png") },
    { name: "Pizza", imageUrl: require("./src/assets/images/pizza.png") },
    { name: "Pasta", imageUrl: require("./src/assets/images/pasta.png") },
    { name: "Cake", imageUrl: require("./src/assets/images/cake.png") },
    { name: "steak", imageUrl: require("./src/assets/images/steak.png") },
    { name: "Drinks", imageUrl: require("./src/assets/images/smoothies.png") },
  ];

  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home">
    //       {(props) => <HomeScreen {...props} extraData={someData} />}
    //     </Stack.Screen>
    //     <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View style={styles.container}>
      <Header upperText="Grab your" lowerText="delicious meal!" />
      <Search setTerm={setTerm} />

      <Categories
        commonCategories={commonCategories}
        term={term}
        setTerm={setTerm}
      />
      <Restaurants term={term} />

      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(253,253,253)",
  },
});
