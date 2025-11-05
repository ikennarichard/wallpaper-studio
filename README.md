# Wallpaper Studio

> A beautiful, cross-platform wallpaper discovery and management application built with React Native.

[![React Native](https://img.shields.io/badge/React%20Native-Expo-blue)](https://expo.dev)
[![Tauri](https://img.shields.io/badge/Tauri-Desktop-orange)](https://tauri.app)

## 📱 Features

### Core Features

- **Curated Wallpaper Gallery** - Browse hundreds of beautiful, high-quality wallpapers
- **Category Organization** - Explore wallpapers by categories (Nature, Abstract, Minimal, etc.)
- **Favorites System** - Save your favorite wallpapers for quick access
- **Preview Mode** - See how wallpapers look on your device before setting

## 🚀 Quick Start

### Prerequisites

- **Node.js** 22.x or higher
- **npm****
- **Expo** (installed automatically)
- **For Desktop Builds:**
  - Windows: Visual Studio Build Tools, Rust, WebView2

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/wallpaper-studio.git
cd wallpaper-studio

# Install dependencies
npm install

# Start the development server
npm start
```

### Running on Different Platforms

```bash
# Mobile Development
npm run android     # Run on Android device/emulator
npm run ios         # Run on iOS device/simulator (macOS only)

# Web Development
npm run web         # Run in browser

# Desktop Development
npm run tauri:dev   # Run as desktop app (requires Rust)
```

## 🎨 Tech Stack

### Frontend

- **[Expo Typescript](https://expo.dev)** - Universal React Native platform
- **[React Native](https://reactnative.dev)** - Cross-platform UI framework
- **[NativeWind](https://www.nativewind.dev)** - Tailwind CSS for React Native

### Desktop

- **[Tauri](https://tauri.app)** - Lightweight desktop framework
- **[Rust](https://www.rust-lang.org)** - System-level programming

## 📦 Building for Production

### Mobile Apps

```bash
# iOS (macOS only)
npm run build:ios
# Output: iOS App Store build

# Android
npm run build:android
# Output: APK or AAB for Google Play
```

### Web App

```bash
npm run web:build
# Output: dist/ folder with static files
# Deploy to any static hosting (Vercel, Netlify, etc.)
```

### Desktop Apps

```bash
# Build for current platform
npm run tauri:build

# Output locations:
# Windows: src-tauri/target/release/bundle/msi/
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Ikenna Richard** - *Initial work* - [Github](https://github.com/yourusername)

## 🙏 Acknowledgments

- HNG mentors/colleagues
- Wallpaper images from [Unsplash](https://unsplash.com)
- UI inspiration from various wallpaper apps
- Built with [Expo](https://expo.dev) and [Tauri](https://tauri.app)

Made with ❤️ by [](https://ikennarichard.vercel.app)
