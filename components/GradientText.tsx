import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

export default function GradientText({
  text = " Discover Beautiful Wallpapers",
}) {
  return (
    <View>
      <MaskedView
        maskElement={
          <Text className="text-xl font-medium font-clash-display-medium">
            {text}
          </Text>
        }
      >
        <LinearGradient
          colors={["#FBB03B", "#EC0C43"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text className="text-xl font-medium opacity-0 font-clash-display-medium">
            {text}
          </Text>
        </LinearGradient>
      </MaskedView>
    </View>
  );
}
