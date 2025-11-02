import Toggle from "@/components/Toggle";
import WallpaperCard from "@/components/WallPaperCard";
import { wallpapers } from "@/utils/data";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function CategoryScreen() {
  const router = useRouter();
  const { id, name } = useLocalSearchParams();
  const [view, setView] = useState<"grid" | "list">("grid");
  const [favorites, setFavorites] = useState<string[]>(["2", "6"]);

  const categoryWallpapers = wallpapers.filter((w) => w.category === name);

  const toggleFavorite = (wallpaperId: string) => {
    setFavorites((prev) =>
      prev.includes(wallpaperId)
        ? prev.filter((id) => id !== wallpaperId)
        : [...prev, wallpaperId]
    );
  };

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
      {/* Back Button & Title */}
      <View className="px-5 pt-4 pb-2 bg-white">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center mb-4"
          activeOpacity={0.7}
        >
          <Text className="text-gray-600 mr-2">←</Text>
          <Text className="text-gray-600 text-sm">Back to Categories</Text>
        </TouchableOpacity>

        <View className="flex-row items-center justify-between">
          <Text className="text-3xl font-bold text-gray-900">{name}</Text>
          <Toggle view={view} onViewChange={setView} />
        </View>
      </View>

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20 }}
      >
        {view === "grid" ? (
          <View className="flex-row flex-wrap justify-between">
            {categoryWallpapers.map((wallpaper) => (
              <View key={wallpaper.id} className="w-[48%]">
                <WallpaperCard
                  wallpaper={{
                    ...wallpaper,
                    isFavorite: favorites.includes(wallpaper.id),
                  }}
                  onPress={() => handleWallpaperPress(wallpaper)}
                  onFavoritePress={() => toggleFavorite(wallpaper.id)}
                />
              </View>
            ))}
          </View>
        ) : (
          <View>
            {categoryWallpapers.map((wallpaper) => (
              <WallpaperCard
                key={wallpaper.id}
                wallpaper={{
                  ...wallpaper,
                  isFavorite: favorites.includes(wallpaper.id),
                }}
                onPress={() => handleWallpaperPress(wallpaper)}
                onFavoritePress={() => toggleFavorite(wallpaper.id)}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
