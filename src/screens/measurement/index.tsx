import ScreenView from "@/src/components/ScreenView";
import useFoodDetails from "@/src/query/hooks/useFoodDetails";
import { useLocalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";
import { Image, ImageSourcePropType, Pressable, Text, View } from "react-native";
import { ServingIcon, OunceIcon, CupIcon, GramIcon, PieceIcon, SliceIcon, DozenIcon, BowlIcon, PortionIcon, PlateIcon } from "@/src/assets/icons";

const MeasurementIcons = {
    serving: ServingIcon,
    ounce: OunceIcon,
    cup: CupIcon,
    gram: GramIcon,
    piece: PieceIcon,
    slice: SliceIcon,
    dozen: DozenIcon,
    bowl: BowlIcon,
    portion: PortionIcon,
    plate: PlateIcon,
} as Record<string, ImageSourcePropType>;

const MeasurementScreen = () => {

    const { food } = useLocalSearchParams();

    const { foodDetails } = useFoodDetails(food as string);
    const { t } = useTranslation();

    return (
        <ScreenView padding scrollable>
            <View className="flex flex justify-between items-center gap-4">

                <Text className="text-2xl font-bold">{foodDetails?.foodName}</Text>
                <Image
                    className="w-full h-[200px] rounded-lg"
                    resizeMode="cover"
                    source={{ uri: foodDetails?.highResImage }} />

                <View className="flex flex-col gap-4 w-full">
                    {
                        foodDetails?.measurements.map((measurement) => (
                            <View key={measurement.type} className="flex w-full flex-col items-center justify-between bg-gray-100 pb-2 rounded-lg dark:bg-gray-800">
                                <View className="flex w-full flex-row items-center justify-between bg-gray-100 p-4 rounded-lg dark:bg-gray-800">
                                    <View className="flex flex-row items-center">
                                        <Image
                                            source={MeasurementIcons[measurement.type as keyof typeof MeasurementIcons] || ServingIcon}
                                            resizeMode="cover"
                                            className="w-10 h-10 rounded-lg mr-4"
                                        />
                                        <View className="flex flex-col gap-2">
                                            <Text className="text-lg font-bold text-black dark:text-white">{t(`home.addMeal.MEASUREMENTS.${measurement.type.toUpperCase()}`)}</Text>
                                        </View>
                                    </View>

                                    <View className="flex flex-row items-center gap-2">
                                        <Pressable className="bg-gray-200 p-4 rounded-lg">
                                            <Text className="text-2xl font-bold">-</Text>
                                        </Pressable>
                                        <View className="flex flex-col gap-2 w-10 items-center justify-center">
                                            <Text className="text-2xl font-bold text-black dark:text-white">1</Text>
                                        </View>
                                        <Pressable className="bg-gray-200 p-4 rounded-lg">
                                            <Text className="text-2xl font-bold">+</Text>
                                        </Pressable>
                                    </View>
                                </View>
                                <Text className="text-sm text-gray-500">{measurement.description}</Text>
                            </View>
                        ))
                    }
                </View>
            </View>
        </ScreenView >
    )
}

export default MeasurementScreen;