import Toggle from "@/components/Toggle";
import WallpaperCard from "@/components/WallPaperCard";
import { useFavorites } from "@/context/FavoriteContext";
import { isWeb } from "@/utils";
import { wallpapers } from "@/utils/data";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { useState } from "react";
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
  const [selectedWallpaper, setSelectedWallpaper] = useState(isWeb ? wallpapers[0] : undefined);

  const handleWallpaperPress = (wallpaper: any) => {
    // For web: open modal directly
    if (Platform.OS === "web") {
      setSelectedWallpaper(wallpaper);
    } else {
      // For mobile: navigate to modal route
      router.push({
        pathname: "/wallpaper/[id]",
        params: wallpaper,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View className="px-4 pt-5 pb-2">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center mb-4"
          activeOpacity={0.7}
          style={{ marginTop: 15, gap: 3 }}
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

      <View style={styles.contentWrapper}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 16 }}
        >
          {view === "grid" ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
                width: isWeb ? 611 : "100%",
                gap: 8,
              }}
            >
              {categoryWallpapers.map((wallpaper) => (
                <View
                  key={wallpaper.id}
                  style={{
                    width: 185,
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
        </ScrollView>
        <WallpaperPreviewModal  wallpaper={selectedWallpaper} isVisible={true} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    ...(Platform.OS === "web" && {
      height: "100%",
      overflow: "hidden",
    }),
  },
  contentWrapper: {
    flex: 1,
    flexDirection: "row",
    ...(Platform.OS === "web" && {
      height: "100%",
      overflow: "hidden",
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
