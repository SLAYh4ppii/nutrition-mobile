import React, { useRef } from "react";
import {
  Text,
  View,
  FlatList,
  useWindowDimensions,
  Pressable,
  StyleSheet,
} from "react-native";
import { clamp } from "lodash";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from "react-native-reanimated";

import ScreenView from "@/src/components/ScreenView";
import { DUMMY_TRANSFORMATION_DATA } from "./dummy_data";
import { format, formatDistance } from "date-fns";

type TransformationItem = {
  date: string | null;
  url: string | null;
  weight: number;
};

function TransformationImage({
  index,
  scrollPosition,
  width,
  url,
}: {
  index: number;
  scrollPosition: Animated.SharedValue<number>;
  width: number;
  url: string | null;
}) {
  const animatedImageStyle = useAnimatedStyle(() => {
    const currentSegment = scrollPosition.value / (width / 3);
    const offset = currentSegment - index;

    let opacity = 0;
    if (offset >= 0 && offset < 1) {
      opacity = 1 - offset;
    } else if (offset >= -1 && offset < 0) {
      opacity = offset + 1;
    }

    return {
      ...StyleSheet.absoluteFillObject,
      opacity,
    };
  });

  if (!url) return null;

  return (
    <View style={{ position: "absolute", width, height: "100%" }}>
      <Animated.Image
        source={{ uri: url }}
        style={[animatedImageStyle]}
        resizeMode="cover"
      />
    </View>
  );
}

function Item({
  date,
  url,
  width,
  onPress,
  weight,
}: {
  date: string | null;
  url: string | null;
  width: number;
  onPress: () => void;
  weight: number;
}) {
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
}

const TransformationScreen = () => {
  const { width } = useWindowDimensions();
  const listRef = useRef<FlatList>(null);

  const data = [null, ...DUMMY_TRANSFORMATION_DATA, null];

  const scrollPosition = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollPosition.value = event.contentOffset.x;
    },
  });

  return (
    <ScreenView scrollable={false}>
      <View style={{ flex: 1 }}>
        {data
          .filter((i) => i)
          .map((item, index) => (
            <TransformationImage
              key={`image-${index}`}
              index={index}
              scrollPosition={scrollPosition}
              width={width}
              url={item?.url ?? null}
            />
          ))}
      </View>

      <View style={{ height: 96, width: "100%" }}>
        <Animated.FlatList
          ref={listRef}
          data={data as TransformationItem[]}
          horizontal
          pagingEnabled
          snapToOffsets={[width / 3, (width / 3) * 2, width]}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          keyExtractor={(_, i) => i.toString()}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Item
              {...item}
              width={width}
              weight={item?.weight ?? 0}
              onPress={() => {
                listRef.current?.scrollToIndex({
                  index: clamp(index - 1, 0, data.length - 1),
                  animated: true,
                });
              }}
            />
          )}
        />
      </View>
    </ScreenView>
  );
};

export default TransformationScreen;
