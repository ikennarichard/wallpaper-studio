import { colors } from "@/constants/colors";
import React from "react";
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  variant?: "primary" | "secondary" | "ghost" | "light";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "sm",
  children,
  style,
  ...props
}: ButtonProps) {
  const variantStyles: Record<string, ViewStyle> = {
    primary: { backgroundColor: colors.toggle.close },
    secondary: { backgroundColor: "#E5E7EB" },
    ghost: { backgroundColor: "transparent" },
    light: { backgroundColor: "transparent" },
  };

  const sizeStyles: Record<string, ViewStyle> = {
    sm: { paddingVertical: 10, paddingHorizontal: 12 },
    md: { paddingVertical: 12, paddingHorizontal: 16 },
    lg: { paddingVertical: 16, paddingHorizontal: 24 },
  };

  const textColorStyles: Record<string, TextStyle> = {
    primary: { color: "#FFFFFF" },
    secondary: { color: "#1F2937" },
    ghost: { color: "#4B5563" },
    light: { color: "#F3F4F6" },
  };

  const textSizeStyles: Record<string, TextStyle> = {
    sm: { fontSize: 14 },
    md: { fontSize: 16 },
    lg: { fontSize: 18 },
  };

  return (
    <TouchableOpacity activeOpacity={0.8} {...props}>
      <View
        className="font-poppins-medium"
        style={[
          styles.base,
          variantStyles[variant],
          sizeStyles[size],
          style as ViewStyle,
          styles.textBase,
          textSizeStyles[size],
          textColorStyles[variant],
        ]}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  textBase: {
    // fontWeight: "600",
  },
});
