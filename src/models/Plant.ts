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

export interface StoragePlantsProps {
  [id: string]: {
    data: PlantProps;
  };
}

export interface PlantParams {
  plant: PlantProps;
}
