import GradientText from "@/components/GradientText";
import { colors } from "@/constants/colors";
import React from "react";
import { Text, View } from "react-native";
import WallpaperSettings from "./components/WallpaperSettings";

export default function settings() {
  return (
    <View
      style={{ flex: 1, padding: 15, backgroundColor: "whitesmoke", gap: 15 }}
    >
      <View>
        <GradientText text="Settings" />
        <Text style={{ color: colors.text.secondary }}>
          Customize your Wallpaper Studio experience
        </Text>
      </View>
      <WallpaperSettings />
    </View>
  );
}
