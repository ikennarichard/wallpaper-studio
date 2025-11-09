import Toggle from "@/components/Toggle";
import WallpaperCard from "@/components/WallPaperCard";
import { wallpapers } from "@/constants/data";
import { useFavorites } from "@/context/FavoriteContext";
import { isWeb } from "@/utils";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { useEffect, useState } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import WallpaperPreviewModal from "../wallpaper/[id]";

export default function CategoryScreen() {
  const router = useRouter();
  const { id, name } = useLocalSearchParams();
  const [view, setView] = useState<"grid" | "list">("grid");
  const { isFavorite, toggleFavorite } = useFavorites();

  const categoryWallpapers = wallpapers.filter((w) => w.category === name);
  const [selectedWallpaper, setSelectedWallpaper] = useState<any>(undefined);

  useEffect(() => {
    if (isWeb) {
      setSelectedWallpaper(wallpapers[0]);
    }
  }, []);

  const handleWallpaperPress = (wallpaper?: any) => {
    if (isWeb) {
      setSelectedWallpaper(wallpaper);
      return;
    }
    router.navigate({
      pathname: "/wallpaper/[id]",
      params: {
        id: wallpaper.id,
        image: wallpaper.image,
        title: wallpaper.title,
        description: wallpaper.description,
      },
    });
  };

  return (
    <ScrollView style={styles.container} className="p-5">
      <View className="px-4 pt-5 pb-2">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center mb-4"
          activeOpacity={0.7}
          style={{ marginTop: 15, gap: 3 }}
        >
          <ArrowLeft size={15} className="text-gray-500" />
          <Text className="text-gray-500 font-poppins-regular text-lg">
            Back to Categories
          </Text>
        </TouchableOpacity>

        <View className="flex-row items-center max-w-xl mb-4 justify-between">
          <Text style={{ fontSize: 48, fontFamily: "Clash-Display-Regular" }}>
            {name}
          </Text>
          <Toggle view={view} onViewChange={setView} />
        </View>
      </View>

      <View style={styles.contentWrapper}>
        <View style={styles.scrollView}>
          {view === "grid" ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: isWeb ? "flex-start" : "space-between",
                flexWrap: "wrap",
                width: isWeb ? 611 : "auto",
                gap: isWeb ? 18 : 5,
              }}
            >
              {categoryWallpapers.map((wallpaper) => (
                <View
                  key={wallpaper.id}
                  style={{
                    width: isWeb ? 185 : 165,
                    minHeight: 290,
                    marginBottom: 8,
                  }}
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
            <View style={{ width: "100%" }}>
              {categoryWallpapers.map((wallpaper) => (
                <View
                  key={wallpaper.id}
                  style={{ minHeight: 290, marginBottom: 8 }}
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
          )}
        </View>
        <WallpaperPreviewModal
          wallpaper={selectedWallpaper}
          isVisible={isWeb ? true : false}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    ...(Platform.OS === "web" && {
      height: "100%",
    }),
  },
  contentWrapper: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    ...(Platform.OS === "web" && {
      height: "100%",
      // overflow: "hidden",
    }),
  },
  scrollView: {
    flex: 1,
    ...(Platform.OS === "web" && {
      overflowY: "auto",
      height: "100%",
    }),
  },
});
