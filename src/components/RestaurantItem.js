import { View, Image, Text, StyleSheet } from "react-native";
// import { withNavigation } from "react-navigation";
// import { TouchableOpacity } from "react-native";
import { elevation } from "../common/styles";
export default function RestaurantItem({ restaurant }) {
  return (
    // <TouchableOpacity onPress={() => navigation.navigate("RestaurantScreen")}>
    <View style={[styles.elevation, styles.container]}>
      <Image style={styles.image} source={{ uri: restaurant.image_url }} />
      <View style={styles.infoContainer}>
        <Text style={styles.header}>{restaurant.name}</Text>
        <View style={styles.info}>
          <Text style={styles.rating}>{restaurant.rating}</Text>
          <Text style={styles.money}>{restaurant.price}</Text>
        </View>
      </View>
    </View>
    // </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  elevation,
  container: {
    alignSelf: "stretch",
    height: 100,
    borderRadius: 500,

    backgroundColor: "white",
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginLeft: 10,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  info: {
    fontWeight: "bold",
    flexDirection: "row",
  },
  rating: {
    marginRight: 20,
  },
  money: {
    color: "gold",
  },
});
