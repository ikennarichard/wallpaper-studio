import { Platform } from "react-native";

export const isWeb = Platform.OS === "web";

export const isTauri = 
  Platform.OS === 'web' && 
  typeof window !== 'undefined' && 
  '__TAURI__' in window;

export const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';
export const isDesktop = isTauri;