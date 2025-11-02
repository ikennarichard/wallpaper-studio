import CategoryCard from "@/components/CategoryCard";
import GradientText from "@/components/GradientText";
import Toggle from "@/components/Toggle";
import { categories } from "@/utils/data";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function BrowseScreen() {
  const [view, setView] = useState<any>("grid");
  const router = useRouter()
  return (
    <ScrollView className="flex-1 " showsVerticalScrollIndicator={false}>
      <View className="px-4 pt-6 pb-4 gap-2">
        <View className="py-4">
          <GradientText text="Browse Categories" />
        </View>
        <Text className="text-gray-600 text-base leading-6 font-poppins-regular">
          Explore our curated collections of stunning wallpapers
        </Text>
        <View className="my-1">
          <Toggle view={view} onViewChange={setView} />
        </View>
      </View>
      <View className="py-4 gap-5">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onPress={router.push(
              `/category/${category.id}?name=${category.title}`
            )}
            variant={view === "grid" ? "flat" : "split"}
          />
        ))}
      </View>
    </ScrollView>
  );
}
