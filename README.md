# 🥗 Nutrition Mobile

> A smart nutrition tracking application powered by Expo React Native

## 📱 Features

### 🔍 Smart Food Detection
- Real-time food recognition using ML Kit
- Instant nutritional information calculation
- Camera integration for food scanning
- Food image analysis and processing

### 🍽️ Meal Management
- Track daily meals and portions
- Detailed nutritional breakdown
  - Calories
  - Protein
  - Carbohydrates
  - Fat
  - Vitamins & Minerals
- Meal history and patterns
- Custom meal additions

### 📊 Analytics & Insights
- Daily nutrition summary
- Weekly progress tracking
- Monthly nutrition analysis
- Historical data visualization
- Personalized nutrition goals

### 👤 Profile Management
- User authentication
- Personal goals setting
- Dietary preferences
- Progress tracking

### 🌍 Multi-language Support
- English
- German
- Spanish
- French
- Italian
- Turkish

## 🧩 Components

### Core Components
- `BackgroundImage` - Customizable background wrapper
- `Button` - Reusable button component
- `Checkbox` - Interactive checkbox element with animations
- `DailyChart` - Daily macronutrient distribution chart
- `DatePicker` - Date selection component
- `FoodDetector` - ML-powered food recognition
- `FoodListItem` - Food item display component
- `Heatmap` - Calendar-style nutrition heatmap
- `HomeMealInput` - Quick meal input interface
- `Image` - Enhanced image component
- `LargeSwitch` - Segmented control component
- `MeasurementsSheet` - Bottom sheet for measurements
- `Meals` - Meal tracking interface
- `NumberSelector` - Weight selection component
- `Overview` - Nutritional overview dashboard
- `ProgressBar` - Animated progress indicator
- `ScreenView` - Screen container component
- `SearchBar` - Food search functionality
- `Separator` - Visual divider component
- `Stepper` - Horizontal step indicator
- `Table` - Nutritional information table
- `TabView` - Swipeable tab navigation
- `TextInput` - Customizable text input
- `ValueChip` - Nutrient value display chip
- `WaterOverview` - Water consumption tracker
- `WeeklyChart` - Weekly nutrition distribution chart

### Documentation for Components

- [ActivityOverview](docs/components/ActivityOverview.md)
- [Button](docs/components/Button.md)
- [Checkbox](docs/components/Checkbox.md)
- [DailyChart](docs/components/DailyChart.md)
- [DatePicker](docs/components/DatePicker.md)
- [FoodDetector](docs/components/FoodDetector.md)
- [FoodListItem](docs/components/FoodListItem.md)
- [Heatmap](docs/components/Heatmap.md)
- [HomeMealInput](docs/components/HomeMealInput.md)
- [Image](docs/components/Image.md)
- [LargeSwitch](docs/components/LargeSwitch.md)
- [MeasurementsSheet](docs/components/MeasurementsSheet.md)
- [Meals](docs/components/Meals.md)
- [NumberSelector](docs/components/NumberSelector.md)
- [Overview](docs/components/Overview.md)
- [ProgressBar](docs/components/ProgressBar.md)
- [ScreenView](docs/components/ScreenView.md)
- [SearchBar](docs/components/SearchBar.md)
- [Separator](docs/components/Separator.md)
- [Stepper](docs/components/Stepper.md)
- [Table](docs/components/Table.md)
- [TabView](docs/components/TabView.md)
- [TextInput](docs/components/TextInput.md)
- [ValueChip](docs/components/ValueChip.md)
- [WaterOverview](docs/components/WaterOverview.md)
- [WeeklyChart](docs/components/WeeklyChart.md)

### Screens
- Profile Screen (`/screens/profile`)
- Camera Screen (`/screens/camera`)
- Meal Tracking Screen
- Analytics Dashboard
- Settings Screen

## 🛠️ Technology Stack

### Core
- **React Native (Expo)** - Mobile framework
- **TypeScript** - Type safety
- **Expo Router** - Navigation
- **Zustand** - State management

### Performance
- **React Query** - Data fetching
- **Flash List** - High-performance lists
- **ML Kit** - Machine learning capabilities

### Development & Deployment
- **EAS Build** - Build system
- **EAS Submit** - App submission
- **EAS Update** - OTA updates

## 📦 Installation

1. **Clone the Repository**
```bash
git clone git@github.com:denizyesilirmak/nutrition-mobile.git
```

2. **Install Dependencies**
```bash
cd nutrition-mobile
npm install
```

3. **Start Development**
```bash
# Start the development server
npm start

# Run on iOS
npx run:ios --device

# Run on Android
npx run:android --device
```

## 📚 Documentation

Detailed documentation available for:
- [Project Scope](docs/PROJECT_SCOPE.md)
- [Component Documentation](docs/components/)
- [API Reference](docs/api/)

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines for details.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- [Repository](https://github.com/denizyesilirmak/nutrition-mobile)
- [Issue Tracker](https://github.com/denizyesilirmak/nutrition-mobile/issues)
- [Documentation](docs/)

---

<p align="center">Made with ❤️ for better nutrition tracking</p>