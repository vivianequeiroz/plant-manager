import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";

export interface PlantProps {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string[];
  frequency: {
    times: number;
    repeat_every: string;
  };
  dateTimeNotification: Date;
}

interface StoragePlantsProps {
  [id: string]: {
    data: PlantProps;
  };
}

export async function savePlant(plant: PlantProps): Promise<void> {
  try {
    const data = await AsyncStorage.getItem("@plantmanager:plants");
    const oldPlants = data ? (JSON.parse(data) as StoragePlantsProps) : {};
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
