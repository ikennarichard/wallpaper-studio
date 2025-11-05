import { menuItems } from "@/utils/data";
import { usePathname, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function DesktopMenu() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <View className="flex-row items-center gap-2">
      {menuItems.map((item) => {
        const isActive = pathname === item.route;
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => router.navigate(item.route as any)}
            className={`
            flex-row items-center gap-2 px-4 py-3 rounded-lg transition-all
            ${
              isActive
                ? "bg-gray-50 text-black border border-gray-200"
                : "text-gray-600 hover:bg-gray-50 opacity-50"
            }
          `}
          >
            <item.icon size={20} strokeWidth={2} />
            <Text className="text-sm font-poppins-regular capitalize">{item.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
