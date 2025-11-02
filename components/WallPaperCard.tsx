import { TouchableOpacity, Text, ImageBackground, View } from 'react-native';
import Card from './Card';
import { Wallpaper } from '@/types';

interface WallpaperCardProps {
  wallpaper: Wallpaper;
  onPress?: () => void;
  onFavoritePress?: () => void;
}

export default function WallpaperCard({ wallpaper, onPress, onFavoritePress }: WallpaperCardProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9} className="mb-4">
      <Card className="h-56 overflow-hidden">
        <ImageBackground 
          source={{ uri: wallpaper.image }}
          className="flex-1"
          resizeMode="cover"
        >
          <View className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <TouchableOpacity 
            onPress={onFavoritePress}
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white items-center justify-center shadow-lg"
            activeOpacity={0.7}
          >
            <Text className="text-xl">
              {wallpaper.isFavorite ? '🧡' : '🤍'}
            </Text>
          </TouchableOpacity>
          
          {/* Content */}
          <View className="absolute bottom-0 left-0 right-0 p-4">
            <Text className="text-white text-xl font-bold mb-2">
              {wallpaper.title}
            </Text>
            <View className="bg-white/20 self-start px-3 py-1.5 rounded-full">
              <Text className="text-white text-xs font-medium">
                {wallpaper.category}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </Card>
    </TouchableOpacity>
  );
}