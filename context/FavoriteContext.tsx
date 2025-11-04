import { createContext, useContext, useState, ReactNode } from 'react';
import { Wallpaper } from '@/types';

interface FavoritesContextType {
  favorites: Wallpaper[];
  addFavorite: (wallpaper: Wallpaper) => void;
  removeFavorite: (wallpaperId: string) => void;
  isFavorite: (wallpaperId: string) => boolean;
  toggleFavorite: (wallpaper: Wallpaper) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Wallpaper[]>([]);

  const addFavorite = (wallpaper: Wallpaper) => {
    setFavorites(prev => {
      if (prev.some(fav => fav.id === wallpaper.id)) {
        return prev;
      }
      return [...prev, wallpaper];
    });
  };

  const removeFavorite = (wallpaperId: string) => {
    setFavorites(prev => prev.filter(fav => fav.id !== wallpaperId));
  };

  const isFavorite = (wallpaperId: string) => {
    return favorites.some(fav => fav.id === wallpaperId);
  };

  const toggleFavorite = (wallpaper: Wallpaper) => {
    if (isFavorite(wallpaper.id)) {
      removeFavorite(wallpaper.id);
    } else {
      addFavorite(wallpaper);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}