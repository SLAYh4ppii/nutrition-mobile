import DarkModeToggle from "@/src/components/DarkModeToggle";
import ScreenView from "@/src/components/ScreenView";
import useMe from "@/src/query/hooks/useMe";
import { calculateBMI, getBmiCategory } from "@/src/utils/bmi";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { t } from "i18next";
import { useColorScheme } from "nativewind";
import { Pressable, Text, View } from "react-native";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <View className="gap-2 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
      {children}
    </View>
  );
};

const Seperator = () => {
  return (
    <View
      className="mx-2 border border-gray-200 dark:border-gray-600"
      style={{ borderWidth: 0.5 }}
    />
  );
};

const Section = ({
  leftIcon,
  text,
  rightIcon,
  rightComponent,
  onPress,
}: {
  leftIcon?: string;
  text: string | undefined;
  rightIcon?: string;
  rightComponent?: React.ReactNode;
  onPress?: () => void;
}) => {
  const { colorScheme } = useColorScheme();

  return (
    <Pressable
      onPress={onPress}
      className="flex flex-row items-center justify-between py-1"
    >
      <View className="flex flex-row items-center gap-4">
        {leftIcon && (
          <Ionicons
            name={leftIcon}
            size={20}
            color={colorScheme === "dark" ? "white" : "black"}
          />
        )}

        <Text className="text-md dark:text-white">{text}</Text>
      </View>
      {rightIcon && (
        <Ionicons
          name={rightIcon}
          size={20}
          color={colorScheme === "dark" ? "white" : "black"}
        />
      )}
      {rightComponent && (
        <View className="absolute right-0">{rightComponent}</View>
      )}
    </Pressable>
  );
};

const Profile = () => {
  const { me, isLoading } = useMe();
  const { colorScheme, toggleColorScheme } = useColorScheme();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!me) {
    return <Text>Error loading profile</Text>;
  }

  return (
    <ScreenView scrollable>
      <View className="flex gap-4 p-4">
        <Text className="text-xl font-bold dark:text-white">
          {t("profile.PERSONAL_INFORMATION")}
        </Text>
        <Container>
          <Section
            leftIcon="person-outline"
            text={`${me?.firstName} ${me?.lastName}`}
          />
          <Seperator />
          <Section leftIcon="mail-outline" text={me?.email} />
          <Seperator />
          <Section
            leftIcon="calendar-outline"
            text={`${me?.age} ${t("profile.YEARS")}`}
          />
          <Seperator />
          <Section
            leftIcon="person-outline"
            text={t("profile.GENDER." + me.gender.toUpperCase())}
          />
          <Seperator />
          <Section leftIcon="medkit-outline" text={`${me?.height} cm`} />
          <Seperator />
          <Section leftIcon="medkit-outline" text={`${me?.weight} kg`} />
          <Seperator />
          <Section
            leftIcon="man-outline"
            text={`${calculateBMI(me)} BMI - ${getBmiCategory(Number(calculateBMI(me)))}`}
          />
          <Seperator />
          <Section
            leftIcon="person-outline"
            text={t("profile.UPDATE_PROFILE")}
            rightIcon="chevron-forward"
            onPress={() => router.push("update")}
          />
          <Seperator />
          <Section
            leftIcon="bar-chart-outline"
            text={t("profile.WEIGHT_HISTORY")}
            rightIcon="chevron-forward"
            onPress={() => router.push("weight")}
          />
        </Container>
        <Text className="text-xl font-bold dark:text-white">
          {t("profile.APP_SETTINGS")}
        </Text>
        <Container>
          <Section
            leftIcon="notifications-outline"
            text={t("profile.NOTIFICATIONS")}
          />
          <Seperator />
          <Section
            leftIcon="moon-outline"
            text={t("profile.DARK_MODE")}
            rightComponent={
              <DarkModeToggle
                value={colorScheme === "dark"}
                onChange={() => toggleColorScheme()}
              />
            }
          />
          <Seperator />
          <Section
            leftIcon="language-outline"
            text={t("profile.LANGUAGE")}
            rightIcon="chevron-forward"
            onPress={() => router.push("language")}
          />
        </Container>
        <Text className="text-xl font-bold dark:text-white">
          {t("profile.CONTACT_US")}
        </Text>
        <Container>
          <Section
            leftIcon="call-outline"
            text={t("profile.CALL_US")}
            rightIcon="call"
          />
          <Seperator />
          <Section
            leftIcon="mail-outline"
            text={t("profile.EMAIL_US")}
            rightIcon="mail"
          />
        </Container>
      </View>
    </ScreenView>
  );
};

export default Profile;
