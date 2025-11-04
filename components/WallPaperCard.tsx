import { colors } from "@/constants/colors";
import { Wallpaper } from "@/types";
import { Heart } from "lucide-react-native";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import Card from "./Card";

interface WallpaperCardProps {
  wallpaper: Wallpaper;
  onPress?: () => void;
  onFavoritePress?: () => void;
  isFavorite?: boolean;
}

export default function WallpaperCard({
  wallpaper,
  onPress,
  onFavoritePress,
  isFavorite,
}: WallpaperCardProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9} className="mb-4">
      <Card className="h-full overflow-hidden w-full">
        <ImageBackground
          source={{ uri: wallpaper.image }}
          className="flex-1"
          resizeMode="cover"
        >
          <View className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <TouchableOpacity
            onPress={onFavoritePress}
            className="absolute top-3 right-3 w-10 h-10 rounded-full items-center justify-center shadow-lg"
            activeOpacity={0.7}
            style={{
              backgroundColor: isFavorite
                ? "white"
                : "rgba(255, 255, 255, 0.25)",
            }}
          >
            <Heart
              size={18}
              color={isFavorite ? "transparent" : "white"}
              fill={isFavorite ? colors.toggle.primary : "transparent"}
            />
          </TouchableOpacity>

          {/* Content */}
          <View className="absolute bottom-0 left-0 right-0 p-4">
            <Text className="text-white text-xl font-bold mb-2">
              {wallpaper.title}
            </Text>
            <View className="bg-white/20 self-start px-3 py-1.5 rounded-full">
              <Text className="text-white text-xs font-medium">
                {wallpaper.category}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </Card>
    </TouchableOpacity>
  );
}
