import Drawer from "@/components/Drawer";
import Header from "@/components/Header";
import MenuItem from "@/components/MenuItem";
import { menuItems } from "@/utils/data";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import "@/global.css";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const router = useRouter();

  const handleMenuItemPress = (route: string) => {
    setIsDrawerOpen(false);
    if (route !== "/") {
      router.push(route as any);
    }
  };

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView className="flex-1 bg-white">
        <Header
          title="Wallpaper Studio"
          onMenuPress={() => setIsDrawerOpen(true)}
        />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="browse" />
          <Stack.Screen name="favorites" />
          <Stack.Screen name="settings" />
        </Stack>
        <Drawer visible={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <View className="flex-1 pt-16">
            <View className="px-6 pb-6 border-b border-gray-100">
              <View className="flex-row items-center gap-2 mb-1">
                <View className="w-2 h-2 bg-primary-500 rotate-45" />
                <Text className="text-xl font-bold text-gray-900">
                  Wallpaper Studio
                </Text>
              </View>
            </View>

            <View className="py-4">
              {menuItems.map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  onPress={() => handleMenuItemPress(item.route)}
                />
              ))}
            </View>
          </View>
        </Drawer>
      </SafeAreaView>
    </>
  );
}
