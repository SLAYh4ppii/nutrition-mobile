import ScreenView from "@/src/components/ScreenView";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Rect } from "react-native-svg";
import {
  CameraDevice,
  Camera as VisionCamera,
  useCameraDevice,
  useCameraPermission,
} from "react-native-vision-camera";

const styles = StyleSheet.create({
  cameraStyle: {
    flex: 1,
    width: "100%",
  },
});

const CameraWrapper = ({
  hasPermission,
  devices,
}: {
  hasPermission: boolean;
  devices: CameraDevice[];
}) => {
  if (!hasPermission) {
    return <View style={styles.cameraStyle} />;
  }
  if (devices.length === 0) {
    return <View style={styles.cameraStyle} />;
  }

  return (
    <VisionCamera
      style={styles.cameraStyle}
      device={devices[0]}
      isActive={true}
    />
  );
};

const CameraOverlay = () => {
  return (
    <View className="absolute z-10 h-full w-full flex-1 items-center justify-center">
      <Pressable className="absolute bottom-20 rounded-2xl bg-lime-400 p-4 dark:bg-lime-500 mb-10 items-center justify-center">
        <Ionicons name="camera" size={24} color="black" />
        <Text className="text-black dark:text-white">Take Picture</Text>
      </Pressable>
      <Svg height="100%" width="100%" viewBox="0 0 120 120">
        <Rect
          x="10"
          y="0"
          width="100"
          height="100"
          fill="transparent"
          strokeWidth={1}
          stroke="#ffffff50"
          rx={10}
        />
      </Svg>
    </View>
  );
};

const Camera = () => {
  const device = useCameraDevice("back");
  const { hasPermission, requestPermission } = useCameraPermission();

  if (!hasPermission) {
    requestPermission();
  }

  return (
    <View className="flex-1">
      <CameraWrapper
        hasPermission={hasPermission}
        devices={device ? [device] : []}
      />
      <CameraOverlay />
    </View>
  );
};

export default Camera;
