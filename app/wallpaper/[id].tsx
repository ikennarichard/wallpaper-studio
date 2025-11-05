import Button from "@/components/Button";
import WallpaperSetupModal from "@/components/WalPaperSetupModal";
import { colors } from "@/constants/colors";
import { Wallpaper } from "@/types";
import { isWeb } from "@/utils";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Heart,
  Minimize2,
  SettingsIcon,
  Upload,
  XCircle,
} from "lucide-react-native";
import { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { height } = Dimensions.get("window");

export default function WallpaperPreviewModal({
  isVisible,
  wallpaper,
}: {
  isVisible: boolean;
  wallpaper?: Wallpaper;
}) {
  const router = useRouter();
  const { id, title, category, image } = useLocalSearchParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [showSetupWallpeaper, setShowSetupWallpaper] = useState(false);

  const tags = ["Nature", "Ambience", "Flowers"];
  const description =
    'Discover the pure beauty of "Natural Essence" - your gateway to authentic, nature-inspired experiences. Let this unique collection elevate your senses and connect you with the unrefined elegance of the natural world.';

  const renderContent = () => (
    <View style={styles.modalOverlay}>
      <View
        style={Platform.OS === "web" ? styles.webContainer : { height }}
        className="bg-white flex-1 rounded-2xl overflow-hidden w-full max-w-sm pb-6"
      >
        {!isWeb ? (
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.closeButton}
            activeOpacity={0.8}
          >
            <XCircle size={16} color={colors.toggle.close} />
          </TouchableOpacity>
        ) : null}
        <ScrollView
          contentContainerStyle={{
            marginHorizontal: "auto",
            padding: isWeb ? 40 : 12,
            marginVertical: isWeb ? 0 : 35,
            flexDirection: isWeb ? "row-reverse" : "column",
            alignItems: isWeb ? "center" : "stretch",
            gap: isWeb ? 40 : 0,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <View style={styles.phoneFrame}>
              <View style={styles.notchContainer}>
                <View style={styles.notch} />
              </View>
              <ImageBackground
                source={{
                  uri: isWeb ? (wallpaper?.image as string) : (image as string),
                }}
                resizeMode="cover"
                style={styles.screenImage}
              />

              <View style={styles.homeIndicator} />
            </View>
          </View>

          <View
            style={{
              padding: isWeb ? 0 : 15,
              gap: 25,
              width: isWeb ? "50%" : "auto",
              flex: isWeb ? 1 : 0,
            }}
          >
            <Text
              style={{ fontSize: 30 }}
              className="font-poppins-semibold text-black"
            >
              Preview
            </Text>

            <View className="mb-3">
              <Text className="text-gray-400 text-sm mb-1">Name</Text>
              <Text className="text-black text-2xl font-poppins-medium">
                {title ? title : wallpaper?.title}
              </Text>
            </View>

            <View className="mb-3">
              <Text className="text-gray-400 text-sm mb-2">Tags</Text>
              <View className="flex-row flex-wrap gap-2">
                {wallpaper?.tags && wallpaper.tags.map((tag, index) => (
                  <View
                    key={index}
                    className="px-3 py-1.5 rounded-2xl border border-gray-200"
                    style={{ backgroundColor: colors.backgroundNeutral }}
                  >
                    <Text className="text-black text-sm font-poppins-regular">
                      {tag}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.descriptionContainer}>
              {/* <LinearGradient
                colors={["rgba(191, 191, 191, 0.2)", "#FFFFFF"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                style={styles.gradientOverlay}
              /> */}
              <View style={styles.descriptionContent}>
                <Text className="text-gray-400 text-sm font-poppins-regular mb-2">
                  Description
                </Text>
                <Text
                  className="text-gray-600 text-sm leading-5 font-poppins-medium"
                  numberOfLines={4}
                >
                  {wallpaper?.description}
                </Text>
              </View>
              {!isWeb ? (
                <BlurView
                  intensity={40}
                  tint="light"
                  style={styles.blurBottom}
                />
              ) : null}
              <LinearGradient
                colors={["rgba(249, 250, 251, 0)", "#F9FAFB"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0.2 }}
                style={styles.gradientOverlay}
              />
            </View>

            <View className="flex-row gap-2 mb-4">
              <TouchableOpacity style={styles.iconContainer}>
                <Upload size={18} color={colors.text.light} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconContainer}>
                <Minimize2 size={18} color={colors.text.light} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconContainer}>
                <SettingsIcon size={18} color={colors.text.light} />
              </TouchableOpacity>
            </View>
            <View style={{ gap: 12 }}>
              <Button
                variant="secondary"
                onPress={() => setIsFavorite(!isFavorite)}
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 6,
                  paddingVertical: 12,
                }}
                activeOpacity={0.8}
              >
                <Heart
                  size={18}
                  fill={isFavorite ? colors.toggle.primary : "transparent"}
                  color={isFavorite ? colors.toggle.primary : "currentColor"}
                />

                <Text className="text-gray-900 font-semibold text-sm">
                  Save to Favorites
                </Text>
              </Button>

              <Button
                onPress={() => setShowSetupWallpaper(true)}
                style={{ marginBottom: 20, paddingVertical: 12 }}
              >
                <Text className="text-white text-sm font-poppins-medium">
                  Set to Wallpaper
                </Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );

  if (Platform.OS === "web") {
    if (!isVisible) return null;

    return (
      <>
        {showSetupWallpeaper ? (
          <WallpaperSetupModal
            visible={showSetupWallpeaper}
            onClose={() => setShowSetupWallpaper(false)}
            onSave={(data) => console.log(data)}
          />
        ) : (
          renderContent()
        )}
      </>
    );
  }

  // Mobile: Use Modal
  return (
    <Modal
      visible={isVisible}
      animationType="fade"
      transparent
      onRequestClose={() => router.back()}
    >
      {showSetupWallpeaper ? (
        <WallpaperSetupModal
          visible={showSetupWallpeaper}
          onClose={() => setShowSetupWallpaper(false)}
          onSave={(data) => console.log(data)}
        />
      ) : null}
      {renderContent()}
    </Modal>
  );
}

const styles = StyleSheet.create({
  descriptionContainer: {
    position: "relative",
    overflow: "hidden",
    borderRadius: 8,
    minHeight: 120,
  },

  blurBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    zIndex: 10,
  },

  gradientOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 80,
  },

  descriptionContent: {
    position: "relative",
    zIndex: 1,
    padding: 16,
  },
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: isWeb ? "auto" : 0,
  },

  webContainer: {
    maxHeight: "90%",
    alignSelf: "center",
  },

  iconContainer: {
    width: 44,
    height: 44,
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    ...(Platform.OS === "web" && {
      width: "100%",
      backgroundColor: "none",
      paddingHorizontal: 0,
      paddingTop: 0,
      paddingBottom: 0,
    }),
  },

  phoneFrame: {
    width: isWeb ? 160 : 200,
    height: isWeb ? 325 : 425,
    borderRadius: 35,
    backgroundColor: "#000",
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#000",
    position: "relative",
  },
  notchContainer: {
    position: "absolute",
    top: 8,
    left: "50%",
    transform: [{ translateX: -45 }],
    zIndex: 2,
  },
  notch: {
    width: 90,
    height: 25,
    borderRadius: 15,
    backgroundColor: "#000",
  },
  screenImage: {
    flex: 1,
    borderRadius: 30,
  },
  homeIndicator: {
    position: "absolute",
    bottom: 10,
    left: "50%",
    transform: [{ translateX: -40 }],
    width: 80,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#fff",
    opacity: 0.3,
  },
  closeButton: {
    width: 30,
    height: 30,
    marginLeft: "auto",
    right: 10,
    top: 10,
    borderRadius: 30,
    padding: 2,
    backgroundColor: colors.toggle.closeBg,
    alignItems: "center",
    justifyContent: "center",
  },
});
