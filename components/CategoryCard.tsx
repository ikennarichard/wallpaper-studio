import { Category } from "@/types";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Card from "./Card";

interface CategoryCardProps {
  category: Category;
  onPress?: () => void;
  variant?: "flat" | "split";
}

export default function CategoryCard({
  category,
  onPress,
  variant = "flat",
}: CategoryCardProps) {
  if (variant === "split") {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.9}
        className="flex-1 w-full border-b border-gray-200 pb-3 mx-4"
      >
        <View className="flex flex-row gap-5">
          <Image
            source={{ uri: category.image }}
            className="w-36 h-36 object-cover rounded-lg"
          />

          <View className="w-full max-w-44">
            <Text className="text-xl font-poppins-semibold text-black mb-1">
              {category.title}
            </Text>
            <Text className="text-lg text-black mb-3 leading-5 font">
              {category.description}
            </Text>
            <View className="bg-gray-200 self-start px-3 py-1.5 rounded-2xl">
              <Text className="text-gray-700 text-sm font-poppins-regular">
                {category.wallpaperCount} wallpapers
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  const renderContent = () => (
    <View className="absolute inset-0 bg-black/30 justify-end p-4">
      <Text className="text-white text-2xl font-bold mb-1">
        {category.title}
      </Text>
      <Text className="text-white/90 text-sm mb-2">{category.description}</Text>
      <View className="bg-white/20 self-start px-3 py-1 rounded-full">
        <Text className="text-white text-xs font-medium">
          {category.wallpaperCount} wallpapers
        </Text>
      </View>
    </View>
  );

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <Card className="h-48 mx-4 mb-4">
        <ImageBackground
          source={{ uri: category.image }}
          className="flex-1"
          resizeMode="cover"
        >
          {renderContent()}
        </ImageBackground>
      </Card>
    </TouchableOpacity>
  );
}
