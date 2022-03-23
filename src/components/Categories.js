import { View, FlatList } from "react-native";

import CategoryItem from "./CategoryItem";

export default function Categories({ commonCategories, term, setTerm }) {
  return (
    <View>
      <FlatList
        data={commonCategories}
        keyExtractor={(category) => category.name}
        renderItem={({ item, index }) => {
          return (
            <CategoryItem
              name={item.name}
              index={index}
              imageUrl={item.imageUrl}
              active={item.name === term}
              handlePress={() => setTerm(item.name)}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
