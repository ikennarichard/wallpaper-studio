import Toggle from "@/components/Toggle";
import WallpaperCard from "@/components/WallPaperCard";
import { useFavorites } from "@/context/FavoriteContext";
import { wallpapers } from "@/utils/data";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function CategoryScreen() {
  const router = useRouter();
  const { id, name } = useLocalSearchParams();
  const [view, setView] = useState<"grid" | "list">("grid");
  const { isFavorite, toggleFavorite } = useFavorites();

  const categoryWallpapers = wallpapers.filter((w) => w.category === name);

  const handleWallpaperPress = (wallpaper: any) => {
    router.push({
      pathname: "/wallpaper/[id]",
      params: {
        id: wallpaper.id,
        title: wallpaper.title,
        category: wallpaper.category,
        image: wallpaper.image,
      },
    });
  };

  return (
    <View className="flex-1 bg-gray-50">
      <View className="px-4 pt-5 pb-2">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center mb-4"
          activeOpacity={0.7}
          style={{ marginBlockStart: 15, gap: 3 }}
        >
          <ArrowLeft size={15} />
          <Text className="text-custom-light font-poppins-regular text-lg">
            Back to Categories
          </Text>
        </TouchableOpacity>

        <View className="flex-row items-center justify-between">
          <Text style={{ fontSize: 48, fontFamily: "Clash-Display-Regular" }}>
            {name}
          </Text>
          <Toggle view={view} onViewChange={setView} />
        </View>
      </View>

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16 }}
      >
        {view === "grid" ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            {categoryWallpapers.map((wallpaper) => (
              <View
                key={wallpaper.id}
                style={{ width: 155, height: 290 }}
                className="mb-2"
              >
                <WallpaperCard
                  wallpaper={{
                    ...wallpaper,
                    isFavorite: isFavorite(wallpaper.id),
                  }}
                  onPress={() => handleWallpaperPress(wallpaper)}
                  onFavoritePress={() => toggleFavorite(wallpaper)}
                  isFavorite={isFavorite(wallpaper.id)}
                />
              </View>
            ))}
          </View>
        ) : (
          <View
            style={{
              width: "100%",
            }}
          >
            {categoryWallpapers.map((wallpaper) => (
              <View key={wallpaper.id} style={{ height: 290 }} className="mb-2">
                <WallpaperCard
                  key={wallpaper.id}
                  wallpaper={{
                    ...wallpaper,
                    isFavorite: isFavorite(wallpaper.id),
                  }}
                  onPress={() => handleWallpaperPress(wallpaper)}
                  onFavoritePress={() => toggleFavorite(wallpaper)}
                  isFavorite={isFavorite(wallpaper.id)}
                />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
