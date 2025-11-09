import { colors } from "@/constants/colors";
import { isWeb } from "@/utils";
import { useState } from "react";
import {
  Modal,
  Platform,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "./Button";

interface WallpaperSetupModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (settings: WallpaperSettings) => void;
}

interface WallpaperSettings {
  displayMode: "fit" | "fill" | "stretch" | "tile";
  autoRotation: boolean;
  lockWallpaper: boolean;
  syncDevices: boolean;
}

const displayModes = [
  {
    value: "fit",
    label: "Fit",
    description: "Scale to fit without cropping",
  },
  {
    value: "fill",
    label: "Fill",
    description: "Scale to fill the entire screen",
  },
  {
    value: "stretch",
    label: "Stretch",
    description: "Stretch to fill the screen",
  },
  {
    value: "tile",
    label: "Tile",
    description: "Repeat the image to fill the screen",
  },
] as const;

export default function WallpaperSetupModal({
  visible,
  onClose,
  onSave,
}: WallpaperSetupModalProps) {
  const [settings, setSettings] = useState<WallpaperSettings>({
    displayMode: "fit",
    autoRotation: false,
    lockWallpaper: true,
    syncDevices: false,
  });

  const handleSave = () => {
    onSave(settings);
    onClose();
  };

  const renderContent = () => (
    <View style={styles.overlay}>
      <View className="flex-1 w-full" style={styles.modalOverlay}>
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={onClose}
        />
        <View
          className="flex-1 ml-auto bg-white"
          style={{ maxWidth: 656, paddingHorizontal: 10 }}
        >
          <View className="px-6 pt-12 pb-6">
            <Text className="text-2xl font-poppins-medium mb-2">
              Wallpaper Setup
            </Text>
            <Text className="font-poppins-regular text-sm leading-5">
              Configure your wallpaper settings and enable auto-rotation
            </Text>
          </View>
          {/* Activate Wallpaper */}
          <View className="mx-6 mb-6 p-5 bg-white rounded-2xl border border-gray-200">
            <Text className="text-xl font-poppins-medium text-black mb-2">
              Activate Wallpaper
            </Text>
            <Text className="text-gray-500 font-poppins-regular text-sm mb-4">
              Set the selected wallpaper as your desktop background
            </Text>
            <View
              style={{ backgroundColor: colors.lightGreen }}
              className="self-start px-4 py-2 rounded-full flex-row items-center gap-2"
            >
              <View className="w-5 h-5 bg-green-500 rounded-full items-center justify-center">
                <Text className="text-white text-xs font-bold">✓</Text>
              </View>
              <Text className="text-green-700 font-semibold text-sm">
                Activated
              </Text>
            </View>
          </View>
          {/* Display Mode */}
          <View className="px-6 mb-6">
            <Text className="text-xl font-poppins-regular text-black mb-4">
              Display mode
            </Text>
            <View className="bg-white rounded-2xl border border-gray-200">
              {displayModes.map((mode, index) => (
                <TouchableOpacity
                  key={mode.value}
                  onPress={() =>
                    setSettings({ ...settings, displayMode: mode.value })
                  }
                  className={`p-4 flex-row items-center ${
                    index !== displayModes.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                  activeOpacity={0.7}
                >
                  <View
                    className={`w-6 h-6 rounded-2xl border items-center justify-center mr-4 ${
                      settings.displayMode === mode.value
                        ? "border-accent"
                        : "border-gray-300"
                    }`}
                  >
                    {settings.displayMode === mode.value && (
                      <View className="w-4 h-4 rounded-lg bg-accent" />
                    )}
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 font-poppins-medium text-base mb-0.5">
                      {mode.label}
                    </Text>
                    <Text className="text-gray-500 font-poppins-regular text-sm">
                      {mode.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          {/* Auto-Rotation */}
          <View className="mx-6 mb-6 p-5 bg-white rounded-2xl border border-gray-200 flex-row items-center justify-between">
            <View className="flex-1">
              <Text className="text-md font-poppins-medium text-black mb-1">
                Auto - Rotation
              </Text>
              <Text className="text-gray-400 text-sm font-poppins-regular">
                Automatically change your wallpaper at regular intervals
              </Text>
            </View>

            <Switch
              value={settings.autoRotation}
              onValueChange={() =>
                setSettings({
                  ...settings,
                  autoRotation: !settings.autoRotation,
                })
              }
              thumbColor={settings.autoRotation ? "#fff" : "#f4f3f4"}
              activeThumbColor="#fff"
              trackColor={{ false: "#E5E7EB", true: "#FBB03B" }}
            />
          </View>

          <View className="px-6 mb-6">
            <Text className="text-xl font-poppins-regular text-gray-900 mb-4">
              Advanced Settings
            </Text>
            <View className="bg-white rounded-2xl border border-gray-200">
              <TouchableOpacity
                onPress={() =>
                  setSettings({
                    ...settings,
                    lockWallpaper: !settings.lockWallpaper,
                  })
                }
                className="p-4 flex-row items-center border-b border-gray-100"
                activeOpacity={0.7}
              >
                <View
                  className={`w-6 h-6 rounded-md border-2 items-center justify-center mr-4 ${
                    settings.lockWallpaper ? "border-accent" : "border-gray-300"
                  }`}
                >
                  {settings.lockWallpaper && (
                    <View className="w-4 h-4 rounded-sm bg-accent" />
                  )}
                </View>
                <View className="flex-1">
                  <Text className="text-gray-900 font-poppins-medium text-base mb-0.5">
                    Lock Wallpaper
                  </Text>
                  <Text className="text-gray-500 font-poppins-regular text-sm">
                    Prevent accidental changes
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  setSettings({
                    ...settings,
                    syncDevices: !settings.syncDevices,
                  })
                }
                className="p-4 flex-row items-center"
                activeOpacity={0.7}
              >
                <View
                  className={`w-6 h-6 rounded-md border-2 items-center justify-center mr-4 ${
                    settings.syncDevices ? "border-accent" : "border-gray-300"
                  }`}
                >
                  {settings.syncDevices && (
                    <View className="w-4 h-4 rounded-sm bg-accent" />
                  )}
                </View>
                <View className="flex-1">
                  <Text className="text-gray-900 font-poppins-medium text-base mb-0.5">
                    Sync Across Devices
                  </Text>
                  <Text className="text-gray-500 font-poppins-regular text-sm">
                    Keep wallpaper consistent on all devices
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            className="px-6 pb-8 gap-5"
            style={{ flexDirection: isWeb ? "row" : "column" }}
          >
            <Button
              onPress={handleSave}
              style={{ width: isWeb ? 200 : "100%", maxWidth: 360 }}
            >
              <Text className="text-white text-sm font-poppins-medium">
                Save Settings
              </Text>
            </Button>
            <Button
              variant="secondary"
              onPress={onClose}
              style={{ width: isWeb ? 200 : "100%", maxWidth: 360 }}
            >
              <Text className="font-poppins-medium text-sm">Cancel</Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );

  if (isWeb) {
    if (!visible) return null;
    return renderContent();
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      {renderContent()}
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    width: "95%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    marginHorizontal: "auto",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 60,
    // maxWidth: 400,
    ...(Platform.OS === "web" && {
      position: "fixed",
      right: 0,
      // borderWidth: 1,
      // height: "100%",
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      marginTop: 0,
      marginHorizontal: 0,
    }),
  },

  overlay: {
    flex: 1,
    // backgroundColor: "rgba(0, 0, 0, 0.4)",
    ...(Platform.OS === "web" && {
      position: "fixed",
      height: "auto",
      inset: 0,
      zIndex: 1,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "stretch",
    }),
  },

  backdrop: {
    ...(Platform.OS === "web" && {
      flex: 1,
      position: "absolute",
      width: "100%",
      height: "100%",
    }),
  },
});
