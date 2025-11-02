import { useRef, useEffect } from "react";
import { Animated, Dimensions, Modal, View, TouchableOpacity } from "react-native";

type DrawerProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Drawer({ visible, onClose, children }: DrawerProps) {
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : Dimensions.get('window').width,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <View className="flex-1 flex-row">
        <TouchableOpacity 
          className="flex-1 bg-black/50" 
          activeOpacity={1}
          onPress={onClose}
        />
        <Animated.View 
          className="w-72 bg-white h-full shadow-2xl"
          style={{ transform: [{ translateX: slideAnim }] }}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
}
