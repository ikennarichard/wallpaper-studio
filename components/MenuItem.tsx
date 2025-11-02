import { MenuItem as MenuItemType } from "@/types";
import { Text, TouchableOpacity } from "react-native";

interface MenuItemProps {
  item: MenuItemType;
  onPress: () => void;
}

export default function MenuItem({ item, onPress }: MenuItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center gap-4 px-4 py-4 active:bg-gray-50 border-b border-gray-300 mx-4 mb-3"
    >
      <item.icon size={24} />
      <Text className="text-base text-gray-800 font-poppins-regular">{item.label}</Text>
    </TouchableOpacity>
  );
}
