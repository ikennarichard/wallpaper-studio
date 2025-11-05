import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View, Platform } from "react-native";

export default function GradientText({
  text = " Discover Beautiful Wallpapers",
  variant = "sm",
}) {
  const size: any = {
    sm: 20,
    md: 36,
    lg: 60,
  };

  // Web implementation using CSS gradient
  if (Platform.OS === "web") {
    return (
      <Text
        style={{
          fontSize: size[variant],
          fontWeight: "500",
          background: "linear-gradient(90deg, #FBB03B 0%, #EC0C43 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
        className="font-clash-display-medium"
      >
        {text}
      </Text>
    );
  }

  // Native implementation using MaskedView
  return (
    <View>
      <MaskedView
        maskElement={
          <Text
            style={{ fontSize: size[variant] }}
            className="font-medium font-clash-display-medium"
          >
            {text}
          </Text>
        }
      >
        <LinearGradient
          colors={["#FBB03B", "#EC0C43"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text
            style={{ fontSize: size[variant] }}
            className="font-medium opacity-0 font-clash-display-medium"
          >
            {text}
          </Text>
        </LinearGradient>
      </MaskedView>
    </View>
  );
}