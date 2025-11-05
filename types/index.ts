import { LucideIcon } from "lucide-react-native";

;export type MenuItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  route: string;
};

export interface Category {
  id: string;
  title: string;
  description: string;
  wallpaperCount: number;
  image: string;
}

export interface Wallpaper {
  id: string;
  title: string;
  category: string;
  image: string;
  isFavorite: boolean;
  tags?: string[];
  description?: string;
}