import BottomBar from "@/src/components/BottomBar";
import IconButton from "@/src/components/IconButton";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Tabs } from "expo-router/tabs";
import { useColorScheme } from "nativewind";
import { useTranslation } from "react-i18next";

const AuthLayout = () => {
  const { colorScheme } = useColorScheme();
  const { t } = useTranslation();

  return (
    <Tabs
      tabBar={(props) => <BottomBar {...props} />}
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        headerTitleAlign: "center",

        headerLeftContainerStyle: {
          paddingLeft: 8,
        },
        headerRightContainerStyle: {
          paddingRight: 8,
        },
        headerStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: t("home.HEADER_TITLE"),
          tabBarIcon: () => (
            <Ionicons
              name="home-outline"
              size={18}
              color={colorScheme === "dark" ? "white" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(foods)"
        options={{
          title: t("foods.HEADER_TITLE"),
          tabBarIcon: () => (
            <Ionicons
              name="fast-food-outline"
              size={18}
              color={colorScheme === "dark" ? "white" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(achivements)"
        options={{
          title: t("achievements.HEADER_TITLE"),
          tabBarIcon: () => (
            <Ionicons
              name="ribbon-outline"
              size={18}
              color={colorScheme === "dark" ? "white" : "black"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="(transformation)"
        options={{
          title: t("transformation.HEADER_TITLE"),
          tabBarIcon: () => (
            <Ionicons
              name="ribbon-outline"
              size={18}
              color={colorScheme === "dark" ? "white" : "black"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="(profile)"
        options={{
          title: t("profile.HEADER_TITLE"),
          tabBarIcon: () => (
            <Ionicons
              name="person-outline"
              size={18}
              color={colorScheme === "dark" ? "white" : "black"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default AuthLayout;
