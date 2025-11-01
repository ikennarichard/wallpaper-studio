import { View, ViewProps } from "react-native";

interface CardProps extends ViewProps {
  children: React.ReactNode;
}

export default function Card({
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <View
      className={`bg-white rounded-2xl shadow-sm overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </View>
  );
}
