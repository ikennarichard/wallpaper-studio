import GradientText from "@/components/GradientText";
import WallpaperSettings from "@/components/WallpaperSettings";
import { colors } from "@/constants/colors";
import { isWeb } from "@/utils";
import React from "react";
import { Text, View } from "react-native";

export default function settings() {
  return (
    <View
      style={{
        flex: 1,
        padding: 15,
        backgroundColor: "whitesmoke",
        gap: 15,
      }}
    >
      <View>
        <GradientText text="Settings" variant={isWeb ? "lg" : "sm"} />
        <Text style={{ color: colors.text.secondary }}>
          Customize your Wallpaper Studio experience
        </Text>
      </View>
      <WallpaperSettings />
    </View>
  );
}
