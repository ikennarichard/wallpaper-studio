import { Category, MenuItem, Wallpaper } from '@/types';
import { Grid3x3, Heart, House, Settings } from 'lucide-react-native';

export const categories: Category[] = [
  {
    id: '1',
    title: 'Nature',
    description: 'Mountains, Forest and Landscapes',
    wallpaperCount: 3,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
  },
  {
    id: '2',
    title: 'Abstract',
    description: 'Modern Geometric and artistic designs',
    wallpaperCount: 4,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800',
  },
  {
    id: '3',
    title: 'Urban',
    description: 'City skylines and architecture',
    wallpaperCount: 5,
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800',
  },
];

export const wallpapers: Wallpaper[] = [
  {
    id: '1',
    title: 'Nature 1',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    isFavorite: false,
  },
  {
    id: '2',
    title: 'Nature 2',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800',
    isFavorite: true,
  },
  {
    id: '3',
    title: 'Nature 4',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
    isFavorite: false,
  },
  {
    id: '4',
    title: 'Nature 5',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
    isFavorite: false,
  },
  {
    id: '5',
    title: 'Urban 1',
    category: 'Urban',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800',
    isFavorite: false,
  },
  {
    id: '6',
    title: 'Urban 2',
    category: 'Urban',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
    isFavorite: true,
  },
];


export const menuItems: MenuItem[] = [
  { id: '1', label: 'Home', icon: House, route: '/' },
  { id: '2', label: 'Browse', icon: Grid3x3, route: '/browse' },
  { id: '3', label: 'Favourites', icon: Heart, route: '/favorites' },
  { id: '4', label: 'Settings', icon: Settings, route: '/settings' },
];
