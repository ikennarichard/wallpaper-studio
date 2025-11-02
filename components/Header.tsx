import logo from "@/assets/images/logo.svg";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
  title: string;
  onMenuPress?: () => void;
}

export default function Header({ title, onMenuPress }: HeaderProps) {
  return (
    <View className="flex-row items-center justify-between px-2 py-4 bg-white border-b border-gray-100 drop-shadow-md">
      <View className="flex-row items-center gap-2">
        <View className="w-2 h-2 bg-primary-500 rotate-45" />
        <Image source={logo} style={{ width: 14, height: 14 }} />
        <Text className="text-sm text-black font-poppins-regular">{title}</Text>
      </View>
      {onMenuPress ? (
        <TouchableOpacity onPress={onMenuPress} className="p-2">
          <MaterialIcons name="menu" size={24} color="black" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
