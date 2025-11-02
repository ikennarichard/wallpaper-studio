import Button from "@/components/Button";
import CategoryCard from "@/components/CategoryCard";
import GradientText from "@/components/GradientText";
import { categories } from "@/utils/data";
import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-4 pt-6 pb-4">
          <View className="py-4">
            <GradientText />
          </View>
          <Text className="text-gray-600 text-base leading-6 font-poppins-regular ">
            Discover curated collections of stunning wallpapers. Browse by
            category, preview in full-screen, and set your favorites.
          </Text>
        </View>

        <View className="py-4">
          <View className="flex-row justify-between items-center mb-4 px-4">
            <Text className="text-xl text-black font-poppins-medium font-medium">
              Categories
            </Text>
            <Button variant="light" size="sm">
              See All
            </Button>
          </View>

          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onPress={() =>
                router.push(`/category/${category.id}?name=${category.title}`)
              }
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
}
