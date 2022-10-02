import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";
import { IPlantProps, IStoragePlantsProps } from "../models/IPlant";

export async function savePlant(plant: IPlantProps): Promise<void> {
  try {
    const data = await AsyncStorage.getItem("@plantmanager:plants");
    const oldPlants = data ? (JSON.parse(data) as IStoragePlantsProps) : {};
    const newPlant = {
      [plant.id]: {
        data: plant,
      },
    };

    //adding new plant and maintaing the old ones
    await AsyncStorage.setItem(
      "@plantmanager:plants",
      JSON.stringify({
        ...newPlant,
        ...oldPlants,
      })
    );
  } catch (error: any) {
    throw new Error(error);
  }
}
export async function loadPlant(): Promise<IPlantProps[]> {
  try {
    const data = await AsyncStorage.getItem("@plantmanager:plants");
    const plants = data ? (JSON.parse(data) as IStoragePlantsProps) : {};

    const plantsSorted = Object.keys(plants)
      .map((plant) => {
        return {
          ...plants[plant].data,
          hour: format(
            new Date(plants[plant].data.dateTimeNotification),
            "HH:mm"
          ),
        };
      })
      .sort(
        (a, b) =>
          Math.floor(new Date(a.dateTimeNotification).getTime() / 1000) -
          Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
      );

    return plantsSorted;
  } catch (error: any) {
    throw new Error(error);
  }
}
