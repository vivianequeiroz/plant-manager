export interface IPlantProps {
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

export interface IStoragePlantsProps {
  [id: string]: {
    data: IPlantProps;
  };
}

export interface IPlantParams {
  plant: IPlantProps;
}
