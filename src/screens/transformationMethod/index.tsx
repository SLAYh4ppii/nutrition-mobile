import ScreenView from "@/src/components/ScreenView";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useColorScheme } from "nativewind";
import { Pressable, Text, View } from "react-native";

const TransformationMethodScreen = () => {
    const { colorScheme } = useColorScheme();

    return (
        <View className="flex-1 items-center justify-between p-4">
            <View className="flex-1 items-center justify-center gap-2">
                <Text className="text-2xl font-bold text-black dark:text-white">Create New Milestone</Text>
                <Text className="text-lg text-gray-500 text-center dark:text-white">
                    Ready to celebrate your fitness journey? 🎉 Create milestones to track your amazing progress and crush those goals!
                    Watch yourself transform and stay super motivated along the way! 💪
                </Text>
            </View>
            <View className="bg-gray-100 rounded-lg p-4 w-full dark:bg-gray-800 mt-4 gap-4">
                <Pressable className="bg-gray-200 rounded-lg p-4 w-full dark:bg-gray-700 flex-row items-center justify-center gap-2">
                    <Ionicons name="camera" size={30} color={colorScheme === "dark" ? "white" : "black"} />
                    <Text className="text-md font-bold text-black dark:text-white">
                        Take a photo
                    </Text>
                </Pressable>

                <Pressable className="bg-gray-200 rounded-lg p-4 w-full dark:bg-gray-700 flex-row items-center justify-center gap-2">
                    <Ionicons name="image" size={30} color={colorScheme === "dark" ? "white" : "black"} />
                    <Text className="text-md font-bold text-black dark:text-white">
                        Upload from gallery
                    </Text>
                </Pressable>
            </View>
        </View>
    )
};

export default TransformationMethodScreen;