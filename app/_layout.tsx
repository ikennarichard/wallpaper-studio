import Drawer from "@/components/Drawer";
import Header from "@/components/Header";
import MenuItem from "@/components/MenuItem";
import { FavoritesProvider } from "@/context/FavoriteContext";
import "@/global.css";
import { menuItems } from "@/utils/data";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { View } from "react-native";
import "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Poppins-Regular": Poppins_400Regular,
    "Poppins-Medium": Poppins_500Medium,
    "Poppins-Semibold": Poppins_600SemiBold,
    "Clash-Display-Regular": require("../assets/fonts/ClashDisplay-Regular.otf"),
    "Clash-Display-Medium": require("../assets/fonts/ClashDisplay-Medium.otf"),
  });

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
    setTimeout(() => {
      router.push(route as any);
    }, 300);
  };

  return (
    <>
      <StatusBar style="dark" />
      <FavoritesProvider>
        <SafeAreaView className="flex-1 bg-white">
          <Header
            title="Wallpaper Studio"
            onMenuPress={() => setIsDrawerOpen(true)}
          />

          <Stack
            screenOptions={{ headerShown: false }}
            initialRouteName="index"
          >
            <Stack.Screen name="index" />
            <Stack.Screen name="browse" />
            <Stack.Screen name="favorites" />
            <Stack.Screen name="settings" />
            <Stack.Screen name="category/[id]" />
          </Stack>
          <Drawer visible={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <View className="flex-1 pt-16">
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
      </FavoritesProvider>
    </>
  );
}
