import { colors } from "@/constants/colors";
import { LayoutGrid, StretchHorizontal } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";

interface ToggleProps {
  view: "grid" | "list";
  onViewChange: (view: "grid" | "list") => void;
}

export default function Toggle({ view, onViewChange }: ToggleProps) {
  return (
    <View className="flex-row gap-2 items-center bg-orange-50 justify-center w-10 h-10 rounded-[20px]">
      {view === "grid" ? (
        <TouchableOpacity
          onPress={() => onViewChange("list")}
          activeOpacity={0.7}
        >
          <View className="flex-row gap-1">
            <LayoutGrid
              size={24}
              color={view === "grid" ? colors.toggle.primary : ""}
            />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => onViewChange("grid")}
          activeOpacity={0.7}
        >
          <View className="gap-1">
            <StretchHorizontal
              size={24}
              color={view === "list" ? colors.toggle.primary : ""}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
