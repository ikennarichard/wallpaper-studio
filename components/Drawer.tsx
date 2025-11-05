import { useRef, useEffect, useState } from "react";
import { Animated, Dimensions, View, TouchableOpacity, StyleSheet, StatusBar, Platform } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type DrawerProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Drawer({ visible, onClose, children }: DrawerProps) {
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;
  const [shouldRender, setShouldRender] = useState(false);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    }

    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: visible ? 0 : Dimensions.get('window').width,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacity, {
        toValue: visible ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (!visible) {
        setShouldRender(false);
      }
    });
  }, [visible, slideAnim, overlayOpacity]);

  if (!shouldRender) {
    return null;
  }

  const statusBarHeight = Platform.OS === 'android' 
    ? StatusBar.currentHeight || 0 
    : insets.top;

  return (
    <View 
      style={[styles.container, { top: statusBarHeight }]} 
      pointerEvents={visible ? "auto" : "none"}
    >
      <Animated.View 
        style={[
          styles.overlay,
          { 
            opacity: overlayOpacity 
          }
        ]}
      >
        <TouchableOpacity 
          style={StyleSheet.absoluteFill}
          activeOpacity={1}
          onPress={onClose}
          disabled={!visible}
        />
      </Animated.View>
      
      <Animated.View 
        style={[
          styles.drawer,
          { 
            transform: [{ translateX: slideAnim }],
          }
        ]}
      >
        {children}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawer: {
    position: 'absolute',
    right: 0,
    width: 280,
    backgroundColor: 'white',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: -2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 16,
  },
});