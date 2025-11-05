import { colors } from "@/constants/colors";
import { isWeb } from "@/utils";
import { Picker } from "@react-native-picker/picker";
import { Link } from "lucide-react-native";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

export default function WallpaperSettings() {
  const [imageQuality, setImageQuality] = useState("high");
  const [notifications, setNotifications] = useState(true);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        marginBottom: 50,
        flexDirection: isWeb ? "row" : "column",
        justifyContent: isWeb ? "space-around" : "flex-start",
      }}
    >
      <View style={{ paddingVertical: isWeb ? 30 : 0 }}>
        <Text style={styles.title} className="font-poppins-medium">
          Wallpaper Setup
        </Text>
        <Text style={styles.subtitle} className="font-poppins-regular">
          Configure your wallpaper settings and enable auto-rotation
        </Text>
        <View
          style={styles.section}
          className="border border-gray-200 rounded-2xl p-5"
        >
          <Text style={styles.label} className="font-poppins-regular">
            Image Quality
          </Text>
          <View style={styles.dropdownWrapper}>
            <Picker
              selectedValue={imageQuality}
              onValueChange={(value) => setImageQuality(value)}
              style={styles.picker}
              dropdownIconColor="#6b7280"
            >
              <Picker.Item label="High (Best Quality)" value="high" />
              <Picker.Item label="Medium" value="medium" />
              <Picker.Item label="Low" value="low" />
            </Picker>
          </View>
        </View>
        <View style={[styles.section, styles.switchSection]}>
          <View className="flex-row justify-between items-center">
            <Text style={styles.label} className="font-poppins-regular">
              Notification
            </Text>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              thumbColor={notifications ? "#fff" : "#f4f3f4"}
              trackColor={{ false: "#E5E7EB", true: "#FBB03B" }}
            />
          </View>
          <Text style={styles.helper} className="font-poppins-regular">
            Get notified about new wallpapers and updates
          </Text>
        </View>
        <View style={styles.buttons}>
          <Pressable style={[styles.button, styles.cancelButton]}>
            <Text style={styles.cancelText} className="font-poppins-regular">
              Cancel
            </Text>
          </Pressable>
          <Pressable style={[styles.button, styles.saveButton]}>
            <Text style={styles.saveText} className="font-poppins-regular">
              Save Settings
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.phoneMockup} className="">
        <View style={styles.phoneFrame}>
          <View style={styles.notch} />
          <View style={styles.deviceStatus}>
            <Text
              style={styles.statusBadge}
              className="font-poppins-medium text-xs gap-2 text-green-700 flex"
            >
              <Link className="text-green-500" size={12} />{" "}
              <Text>Connected to device</Text>
            </Text>
            <Text style={styles.statusSub} className="font-poppins-medium">
              Click to disconnect
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    color: "#6b7280",
    marginTop: 4,
    marginBottom: 24,
    fontSize: 14,
  },
  section: {
    marginBottom: 24,
  },
  label: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 8,
  },
  dropdownWrapper: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    backgroundColor: "#F9FAFB",
  },
  picker: {
    color: "#111827",
  },
  switchSection: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    padding: 16,
  },

  helper: {
    color: "#6b7280",
    fontSize: 14,
    marginTop: 2,
  },
  buttons: {
    gap: 12,
    marginTop: 12,
  },
  button: {
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButton: {
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  cancelText: {
    color: "#111827",
    fontWeight: "600",
  },
  saveButton: {
    backgroundColor: colors.toggle.primary,
  },
  saveText: {
    color: "#fff",
    fontWeight: "600",
  },
  phoneMockup: {
    alignItems: "center",
    marginTop: 40,
  },
  phoneFrame: {
    width: 220,
    height: 420,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#E5E7EB",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  notch: {
    position: "absolute",
    top: 8,
    width: 70,
    height: 18,
    borderRadius: 10,
    backgroundColor: "#000",
  },
  deviceStatus: {
    alignItems: "center",
    gap: 10,
  },
  statusBadge: {
    backgroundColor: colors.lightGreen,
    color: "#111827",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 4,
  },
  statusSub: {
    fontSize: 12,
  },
});
