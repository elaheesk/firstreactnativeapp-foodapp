// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { View, StyleSheet } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import Header from "../components/Header";
// import Categories from "../components/Categories";
// import Restaurants from "../components/Restaurants";
// import Search from "../components/Search";
// import React, { useEffect, useState } from "react";
// import useRestaurants from "../hooks/useRestaurants";

// const HomeScreen = ({ navigation }) => {
//   const [term, setTerm] = useState("Burger");
//   const commonCategories = [
//     { name: "Burger", imageUrl: require("../") },
//     { name: "Pizza", imageUrl: require("../assets/images/pizza.png") },
//     { name: "Pasta", imageUrl: require("../assets/images/pasta.png") },
//     { name: "Cake", imageUrl: require("../assets/images/cake.png") },
//     { name: "steak", imageUrl: require("../assets/images/steak.png") },
//     { name: "Drinks", imageUrl: require("../assets/images/smoothies.png") },
//   ];

//   const [{ data, loading, error }, searchResaurants] = useRestaurants(term);

//   useEffect(() => {
//     searchResaurants(term);
//   }, [term]);

//   return (
//     <View style={styles.container}>
//       <Header upperText="Grab your" lowerText="delicious meal!" />
//       <Search setTerm={setTerm} />

//       <Categories
//         commonCategories={commonCategories}
//         term={term}
//         setTerm={setTerm}
//       />
//       <Restaurants
//         data={data}
//         loading={loading}
//         error={error}
//         navigation={navigation}
//       />

//       <StatusBar />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "rgb(253,253,253)",
//   },
// });
// export default HomeScreen;
