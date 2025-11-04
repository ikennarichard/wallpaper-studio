import empty from "@/assets/images/emptyfavorites.png";
import Button from "@/components/Button";
import GradientText from "@/components/GradientText";
import WallpaperCard from "@/components/WallPaperCard";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function Favorites() {
  const router = useRouter();
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

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
  if (favorites.length === 0) {
    return (
      <View className="flex-1 bg-white items-center justify-center px-5">
        <Image
          source={empty}
          style={{
            width: 197,
            height: 185,
          }}
        />
        <Text className="text-2xl font-bold text-gray-900 mb-2">
          Your Favourites
        </Text>
        <Text className="text-gray-600 text-center mb-6">
          No favourites yet. Start adding wallpapers you love!
        </Text>
        <Button onPress={() => router.push("/")}>Browse Wallpapers</Button>
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <GradientText text="Saved Wallpapers" />
      <Text className="font-poppins-regular text-sm text-textSecondary">
        Your saved wallpaper collection
      </Text>
      <ScrollView
        className="bg-gray-50"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20 }}
      >
        <View className="flex-row flex-wrap justify-between">
          {favorites.map((wallpaper) => (
            <View key={wallpaper.id} className="w-[48%]">
              <WallpaperCard
                wallpaper={{
                  ...wallpaper,
                  isFavorite: true,
                }}
                onPress={() => handleWallpaperPress(wallpaper)}
                onFavoritePress={() => toggleFavorite(wallpaper)}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
