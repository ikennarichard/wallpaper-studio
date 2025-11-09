import { colors } from "@/constants/colors";
import { SettingsIcon, Upload } from "lucide-react-native";
import React from "react";
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import GradientText from "./GradientText";

const { width } = Dimensions.get("window");

type Props = {
  imageUri?: string;
  localImage?: any;
  category?: string;
  selection?: string;
};

export default function ActiveWallpaper({
  imageUri,
  localImage,
  category = "Nature",
  selection = "Mountain Peak",
}: Props) {
  const imageSource = localImage
    ? localImage
    : imageUri
      ? { uri: imageUri }
      : null;

  return (
    <View style={styles.wrapper}>
      <View style={styles.left}>
        <View style={styles.phoneFrame}>
          {imageSource ? (
            <Image
              source={imageSource}
              style={styles.phoneImage}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.emptyPhone}>
              <Text style={styles.emptyText}>No image</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.right}>
        <GradientText text="Your Active Wallpaper" variant={Platform.OS === 'web' ? 'md' : ''} />
        <Text style={styles.description}>
          This wallpaper is currently set as your active background
        </Text>

        <View style={styles.meta}>
          <View>
            <Text className="font-poppins-regular" style={styles.metaText}>
              Category - <Text className="font-poppins-medium" style={styles.metaBold}>{category}</Text>
            </Text>
            <Text className="font-poppins-regular" style={[styles.metaText, { marginTop: 6 }]}>
              Selection - <Text className="font-poppins-medium" style={styles.metaBold}>{selection}</Text>
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 12,
              marginTop: 8
            }}
          >
            <TouchableOpacity style={styles.iconContainer}>
              <Upload size={18} color={colors.text.light} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconContainer}>
              <SettingsIcon size={18} color={colors.text.light} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const PHONE_WIDTH = Math.min(150, Math.round(width * 0.18));
const PHONE_HEIGHT = Math.round(PHONE_WIDTH * 1.9);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 14,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    height: 250,
  },

  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  left: {
    marginRight: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  phoneFrame: {
    width: 117,
    height: 210,
    // borderRadius: Math.round(PHONE_WIDTH * 0.17),
    borderWidth: 3,
      borderRadius: 20,
    borderColor: "#E5E7EB",
    backgroundColor: "#fff",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
  },
  notch: {
    position: "absolute",
    top: 6,
    width: PHONE_WIDTH * 0.45,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#000",
    zIndex: 3,
  },
  phoneImage: {
    width: "100%",
    height: "100%",
  
    overflow: "hidden",
  },
  emptyPhone: {
    width: PHONE_WIDTH - 12,
    height: PHONE_HEIGHT - 50,
    marginTop: 18,
    borderRadius: 12,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    color: "#9CA3AF",
    fontSize: 12,
  },
  homeIndicator: {
    position: "absolute",
    bottom: 6,
    width: PHONE_WIDTH * 0.35,
    height: 4,
    borderRadius: 4,
    backgroundColor: "#E5E7EB",
    opacity: 0.8,
  },

  right: {
    flex: 1,
    paddingRight: 6,
  },
  titleGradient: {
    alignSelf: "flex-start",
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginBottom: 6,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },
  description: {
    color: "#6b7280",
    fontSize: 20,
    marginBottom: 10,
  },
  meta: {
    marginTop: 4,
    flexDirection: Platform.OS !== "web" ? "column" : "row",
    justifyContent: "space-between",
  },
  metaText: {
    color: "#374151",
    fontSize: 13,
  },
  metaBold: {
    color: "#111827",
  },

  actionButton: {
    marginTop: 14,
    backgroundColor: "#FFA821",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
});
