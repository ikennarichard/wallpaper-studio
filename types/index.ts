import { LucideIcon } from "lucide-react-native";

export type Category = {
  id: string;
  title: string;
  description: string;
  wallpaperCount: number;
  image: string;
};

export type MenuItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  route: string;
};

export type Wallpaper = {
  id: string;
  title: string;
  category: string;
  image: string;
  isFavorite?: boolean;
}