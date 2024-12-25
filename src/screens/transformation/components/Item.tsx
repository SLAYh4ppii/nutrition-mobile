import React from "react";
import { Text, Pressable } from "react-native";
import { format, formatDistance } from "date-fns";

type ItemProps = {
  date: string | null;
  url: string | null;
  width: number;
  onPress: () => void;
  weight: number;
};

export const Item = ({
  date,
  url,
  width,
  onPress,
  weight,
}: ItemProps) => {
  const formatedDate = date ? format(new Date(date), "dd MMM yyyy") : null;

  return (
    <Pressable
      onPress={onPress}
      style={{
        height: "100%",
        width: width / 3,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          display: weight === 0 ? "none" : "flex",
        }}
        className="mb-2 rounded-xl bg-black p-1 px-2 text-2xl font-bold text-white dark:bg-gray-400 dark:text-black"
      >
        {weight}
        <Text className="text-sm"> kg</Text>
      </Text>

      <Text className="text-md text-black dark:text-white">{formatedDate}</Text>
      <Text className="text-sm text-gray-500 dark:text-gray-400">
        {date
          ? formatDistance(new Date(date), new Date(), {
              addSuffix: true,
            })
          : ""}
      </Text>
    </Pressable>
  );
}; 