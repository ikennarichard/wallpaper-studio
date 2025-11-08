import GradientText from "@/components/GradientText";
import WallpaperSettings from "@/components/WallpaperSettings";
import { colors } from "@/constants/colors";
import { isWeb } from "@/utils";
import React from "react";
import { Text, View, ScrollView } from "react-native";

export default function settings() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "whitesmoke",
        gap: 15,
      }}
    >
      <View>
        <GradientText text="Settings" variant={isWeb ? "lg" : "sm"} />
        <Text className="font-poppins-regular" style={{ color: colors.text.secondary, fontSize: 24,  }}>
          Customize your Wallpaper Studio experience
        </Text>
      </View>
      <WallpaperSettings />
    </ScrollView>
  );
}
