import ScreenView from "@/src/components/ScreenView";
import { changeLanguage, LANGUAGES, useSelectedLanguage } from "@/src/i18n";
import { Ionicons } from "@expo/vector-icons";

import { Pressable, Text, View } from "react-native";

const LanguageScreen = () => {
  const currentLanguage = useSelectedLanguage();

  console.log("currentLanguage", currentLanguage);

  return (
    <ScreenView padding>
      <View className="flex rounded-lg bg-gray-50 dark:bg-gray-800">
        {LANGUAGES.map((language) => (
          <Pressable
            onPress={() => changeLanguage(language.code)}
            key={language.code}
            className="flex flex-row items-center justify-between p-4"
          >
            <Text>{language.originalName}</Text>
            {currentLanguage === language.code && (
              <Ionicons name="checkmark" size={16} />
            )}
          </Pressable>
        ))}
      </View>
    </ScreenView>
  );
};

export default LanguageScreen;
