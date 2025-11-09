import CategoryCard from "@/components/CategoryCard";
import GradientText from "@/components/GradientText";
import Toggle from "@/components/Toggle";
import { categories } from "@/constants/data";
import { isWeb } from "@/utils";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function BrowseScreen() {
  const [view, setView] = useState<any>("grid");
  const router = useRouter();
  return (
    <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
      <View
        className="pt-6 pb-4 gap-2"
        style={{
          flexDirection: isWeb ? "row" : "column",
          alignItems: isWeb ? "center" : "flex-start",
          justifyContent: isWeb ? "space-between" : "flex-start",
        }}
      >
        <View className="py-4">
          <GradientText
            text="Browse Categories"
            variant={isWeb ? "lg" : "sm"}
          />
          <Text className="text-gray-600 leading-6 font-poppins-regular my-2" style={{fontSize: isWeb ? 24 : 14}}>
            Explore our curated collections of stunning wallpapers
          </Text>
        </View>
        <View className="my-1">
          <Toggle view={view} onViewChange={setView} />
        </View>
      </View>
      <View
        className="py-4 gap-5"
        style={{
          flexDirection: isWeb && view === "grid" ? "row" : "column",
          overflow: "hidden",
          flexWrap: isWeb ? "wrap" : "nowrap",
          marginInline: isWeb ? "auto" : 0,
          gap: isWeb ? 12 : 0,
          width: isWeb ? "100%" : "auto",
          // paddingHorizontal: isWeb && view === "grid" ? 10 : 0,
        }}
      >
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onPress={() =>
              router.push(
                `/category/${category.id}?name=${category.title}` as any
              )
            }
            variant={view === "grid" ? "flat" : "split"}
          />
        ))}
      </View>
    </ScrollView>
  );
}
