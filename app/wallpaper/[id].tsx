import Button from "@/components/Button";
import { BlurView } from "expo-blur";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { height } = Dimensions.get("window");

export default function WallpaperPreviewScreen() {
  const router = useRouter();
  const { id, title, category, image } = useLocalSearchParams();
  const [isFavorite, setIsFavorite] = useState(false);

  const tags = ["Nature", "Ambience", "Flowers"];
  const description =
    'Discover the pure beauty of "Natural Essence" - your gateway to authentic, nature-inspired experiences. Let this unique collection elevate your senses and connect you with the unrefined elegance of the natural world.';

  return (
    <Modal
      visible={true}
      animationType="fade"
      transparent
      onRequestClose={() => router.back()}
    >
      <BlurView intensity={80} className="flex-1">
        <View className="flex-1 bg-black/40 justify-center items-center p-5">
          {/* Close Button */}
          <TouchableOpacity
            onPress={() => router.back()}
            className="absolute top-12 right-5 z-10 w-10 h-10 rounded-full bg-primary-500 items-center justify-center"
            activeOpacity={0.8}
          >
            <Text className="text-white text-2xl font-light">×</Text>
          </TouchableOpacity>

          {/* Content Container */}
          <View
            className="bg-white rounded-3xl overflow-hidden w-full max-w-md"
            style={{ maxHeight: height * 0.85 }}
          >
            {/* Phone Preview */}
            <View className="items-center pt-6 pb-4">
              <View className="w-48 h-96 rounded-[40px] border-4 border-gray-900 overflow-hidden bg-black">
                {/* Notch */}
                <View className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10" />

                {/* Wallpaper Image */}
                <ImageBackground
                  source={{ uri: image as string }}
                  className="flex-1"
                  resizeMode="cover"
                >
                  {/* Home Indicator */}
                  <View className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/80 rounded-full" />
                </ImageBackground>
              </View>
            </View>

            {/* Details Section */}
            <ScrollView
              className="flex-1 px-6"
              showsVerticalScrollIndicator={false}
            >
              <Text className="text-3xl font-bold text-gray-900 mb-1">
                Preview
              </Text>

              {/* Name */}
              <View className="mb-4">
                <Text className="text-gray-500 text-sm mb-1">Name</Text>
                <Text className="text-gray-900 text-xl font-bold">{title}</Text>
              </View>

              {/* Tags */}
              <View className="mb-4">
                <Text className="text-gray-500 text-sm mb-2">Tags</Text>
                <View className="flex-row flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <View
                      key={index}
                      className="bg-gray-100 px-4 py-2 rounded-full"
                    >
                      <Text className="text-gray-700 text-sm">{tag}</Text>
                    </View>
                  ))}
                </View>
              </View>

              {/* Description */}
              <View className="mb-6">
                <Text className="text-gray-500 text-sm mb-2">Description</Text>
                <Text className="text-gray-600 text-sm leading-6">
                  {description}
                </Text>
              </View>

              {/* Action Buttons */}
              <View className="flex-row gap-3 mb-4">
                <TouchableOpacity className="w-12 h-12 bg-gray-100 rounded-xl items-center justify-center">
                  <Text className="text-xl">↗</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-12 h-12 bg-gray-100 rounded-xl items-center justify-center">
                  <Text className="text-xl">📌</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-12 h-12 bg-gray-100 rounded-xl items-center justify-center">
                  <Text className="text-xl">⚙️</Text>
                </TouchableOpacity>
              </View>

              {/* Main Actions */}
              <View className="gap-3 pb-6">
                <Button
                  variant="secondary"
                  onPress={() => setIsFavorite(!isFavorite)}
                  className="flex-row items-center justify-center gap-2"
                >
                  <Text className="text-xl">{isFavorite ? "❤️" : "🤍"}</Text>
                  <Text className="text-gray-800 font-semibold">
                    Save to Favorites
                  </Text>
                </Button>

                <Button onPress={() => console.log("Set wallpaper")}>
                  Set to Wallpaper
                </Button>
              </View>
            </ScrollView>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
}
