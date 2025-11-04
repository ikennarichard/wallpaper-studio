import empty from "@/assets/images/emptyfavorites.png";
import Button from "@/components/Button";
import GradientText from "@/components/GradientText";
import WallpaperCard from "@/components/WallPaperCard";
import { useFavorites } from "@/context/FavoriteContext";
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
      <View style={{ flex: 1, paddingVertical: 15, paddingInline: 15 }}>
        <GradientText text="Saved Wallpapers" />
        <Text className="font-poppins-regular text-sm text-textSecondary">
          Your saved wallpaper collection
        </Text>
        <View className="flex-1 items-center justify-center">
          <Image
            source={empty}
            style={{
              width: 197,
              height: 185,
              marginBottom: 40,
            }}
          />
          <View className="items-center w-32 p-3">
            <Text className="text-2xl font-poppins-medium text-gray-500 mb-2">
              No Saved Wallpapers
            </Text>
            <Text className="text-gray-500 mb-6 text-xs font-poppins-regular">
              Start saving your favorite wallpapers to see them here
            </Text>
          </View>
          <Button onPress={() => router.push("/")}>
            <Text
              className="text-white font-poppins-medium text-sm"
              style={{ padding: 5 }}
            >
              Browse Wallpapers
            </Text>
          </Button>
        </View>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, paddingVertical: 15, paddingInline: 15 }}>
      <GradientText text="Saved Wallpapers" />
      <Text className="font-poppins-regular text-sm text-textSecondary">
        Your saved wallpaper collection
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 15 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {favorites.map((wallpaper) => (
            <View
              key={wallpaper.id}
              style={{ width: 155, height: 290 }}
              className="mb-2"
            >
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
