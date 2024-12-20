import { Stack } from "expo-router/stack";
import { useTranslation } from "react-i18next";

const TransformationStack = () => {
  const { t } = useTranslation();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: t("transformation.HEADER_TITLE"),
        }}
      />
    </Stack>
  );
};

export default TransformationStack;
