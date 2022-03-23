import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  FlatList,
} from "react-native";
import { useEffect } from "react";

import useRestaurants from "../hooks/useRestaurants";

import RestaurantItem from "./RestaurantItem";
// import { withNavigation } from "react-navigation";

export default function Restaurants({ term }) {
  const [{ data, loading, error }, searchRestaurants] = useRestaurants(term);

  useEffect(() => {
    searchRestaurants(term);
  }, [term]);

  if (loading) return <ActivityIndicator size="large" marginVertical={30} />;
  if (error)
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{error}</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
      <FlatList
        data={data}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item, index }) => <RestaurantItem restaurant={item} />}
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
});

// export default withNavigation(Restaurants);
//Client ID
//1fTdvyCGXKhKA2To0RL_kQ

//API Key
//dDZAKXinAjcN1nOQEvi9zvYtRjDqGc8JVDUJuGEETCUbsyUhpCzBnmOMqRGx4tdxQumPZWabUkAhRK5tEJ605xquqah7GcMoxg-RbMuibeE4gtY1E4EdAkhPiRg6YnYx
