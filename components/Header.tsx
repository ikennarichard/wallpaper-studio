import { Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
  title: string;
  onMenuPress?: () => void;
}

export default function Header({ title, onMenuPress }: HeaderProps) {
  return (
    <View className="flex-row items-center justify-between px-5 py-4 bg-white border-b border-gray-100">
      <View className="flex-row items-center gap-2">
        <View className="w-2 h-2 bg-primary-500 rotate-45" />
        <Text className="text-lg font-bold text-gray-900">{title}</Text>
      </View>
      {onMenuPress && (
        <TouchableOpacity onPress={onMenuPress} className="p-2">
          <View className="space-y-1">
            <View className="w-6 h-0.5 bg-gray-800" />
            <View className="w-6 h-0.5 bg-gray-800" />
            <View className="w-6 h-0.5 bg-gray-800" />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
