import ActiveWallpaper from "@/components/ActiveWallpaper";
import Button from "@/components/Button";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/constants/data";
import { isWeb } from "@/utils";
import { useRouter } from "expo-router";
import { Platform, ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="p-4">
          <ActiveWallpaper imageUri={categories[0].image} />
        </View>

        <View className="py-4">
          <View className="flex-row justify-between items-center mb-4 px-4">
            <Text className="text-xl text-black font-poppins-medium font-medium">
              Categories
            </Text>
            <Button variant="light" size="sm">
              <Text>See All</Text>
            </Button>
          </View>

          <View
            style={{
              flexDirection: Platform.OS === "web" ? "row" : "column",
              overflow: "hidden",
              flexWrap: Platform.OS === "web" ? "wrap" : "nowrap",
              marginInline: Platform.OS === "web" ? "auto" : 0,
              gap: isWeb ? 12 : 0,
              paddingHorizontal: isWeb ? 10 : 0,
            }}
          >
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onPress={() =>
                  router.push({
                    pathname: '/category/[id]',
                    params: {
                      id: category.id,
                      name: category.title
                    }
                  })
                }
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
}
