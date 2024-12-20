import ScreenView from "@/src/components/ScreenView";
import {
  Text,
  View,
  FlatList,
  useWindowDimensions,
  Pressable,
  Image,
} from "react-native";
import { DUMMY_TRANSFORMATION_DATA } from "./dummy_data";
import { useRef, useState } from "react";
import { clamp } from "lodash";
import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  withSequence,
  withTiming,
} from "react-native-reanimated";

const data = [null, ...DUMMY_TRANSFORMATION_DATA, null];

const Item = ({
  date,
  url,
  width,
  onPress,
}: {
  date: string | null;
  url: string | null;
  width: number;
  onPress: () => void;
}) => {
  if (!date || !url) {
    return (
      <Pressable
        onPress={onPress}
        style={{
          height: "100%",
          width: width / 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Pressable>
    );
  }

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
      <Text>{date}</Text>
    </Pressable>
  );
};

const TransformationScreen = () => {
  const { width } = useWindowDimensions();
  const listRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    "worklet";
    const currentIndex = event.contentOffset.x / width;

    if (currentIndex % 1 === 0) {
      runOnJS(setCurrentIndex)(Math.round(currentIndex));
    }
  });

  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      opacity: withSequence(withTiming(0), withTiming(1)),
    };
  }, [currentIndex]);

  return (
    <ScreenView scrollable={false}>
      <View className="flex-1 bg-lime-200">
        <Animated.Image
          source={{ uri: DUMMY_TRANSFORMATION_DATA[currentIndex].url }}
          fadeDuration={300}
          style={[
            {
              height: "100%",
              width: "100%",
            },
            animatedImageStyle,
          ]}
        />
      </View>
      <View className="h-24 w-full bg-lime-400">
        <Animated.FlatList
          ref={listRef}
          pagingEnabled
          horizontal
          data={data as any}
          renderItem={({
            item,
            index,
          }: {
            item: { date: string; url: string };
            index: number;
          }) => (
            <Item
              {...item}
              width={width}
              onPress={() => {
                // move item to the center

                listRef.current?.scrollToIndex({
                  index: clamp(index - 1, 0, DUMMY_TRANSFORMATION_DATA.length),
                  animated: true,
                });
                setCurrentIndex(index);
              }}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          snapToOffsets={[width / 3, (width / 3) * 2, width]}
          onScroll={scrollHandler}
        />
      </View>
    </ScreenView>
  );
};

export default TransformationScreen;
