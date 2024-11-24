import IconButton from "@/src/components/IconButton";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Stack } from "expo-router/stack";
import { t } from "i18next";
import { useColorScheme } from "nativewind";

const HomeStackLayout = () => {
  const { colorScheme } = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerTintColor: colorScheme === "dark" ? "white" : "black",
      }}
    >
      <Stack.Screen
        options={{
          title: t("home.HEADER_TITLE"),
          headerShown: true,
          headerLeft: () => (
            <IconButton
              onPress={() => {
                router.push("mealHistory");
              }}
              icon={
                <Ionicons
                  name="calendar-outline"
                  size={24}
                  color={colorScheme === "dark" ? "white" : "black"}
                />
              }
            />
          ),
        }}
        name="index"
      />
      <Stack.Screen
        name="addMeal"
        options={{
          presentation: "formSheet",
        }}
      />
      <Stack.Screen
        name="addWater"
        options={{
          presentation: "card",
          gestureEnabled: true,
          animation: "flip",
          headerShown: true,
        }}
      />
      <Stack.Screen
        options={{
          title: "Meal History",
          headerShown: true,
        }}
        name="mealHistory"
      />
      <Stack.Screen
        options={{
          title: "Summary",
          headerShown: true,
        }}
        name="daySummary"
      />
      <Stack.Screen
        options={{
          title: "Nutri Guide",
          headerShown: true,
          presentation: "modal",
          animation: "fade",
        }}
        name="aiRecommendation"
      />
    </Stack>
  );
};

export default HomeStackLayout;
