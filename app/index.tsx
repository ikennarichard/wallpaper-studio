import Button from "@/components/Button";
import CategoryCard from "@/components/CategoryCard";
import GradientText from "@/components/GradientText";
import { categories } from "@/utils/data";
import { ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-5 pt-6 pb-4">
          <GradientText />
          <Text className="text-gray-600 text-base leading-6">
            Discover curated collections of stunning wallpapers. Browse by
            category, preview in full-screen, and set your favorites.
          </Text>
        </View>

        <View className="py-4">
          <View className="flex-row justify-between items-center px-5 mb-4">
            <Text className="text-xl font-bold text-gray-900">Categories</Text>
            <Button variant="ghost" size="sm">
              See All
            </Button>
          </View>

          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onPress={() => console.log("Category pressed:", category.title)}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
}
