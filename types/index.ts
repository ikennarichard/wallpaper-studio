export type Category = {
  id: string;
  title: string;
  description: string;
  wallpaperCount: number;
  image: string;
  gradient?: string[];
};

export type MenuItem = {
  id: string;
  label: string;
  icon: string;
  route: string;
};
