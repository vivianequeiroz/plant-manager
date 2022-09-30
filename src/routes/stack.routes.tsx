import React from "react";

import colors from "../styles/colors";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../screens/Welcome";
import UserIdentification from "../screens/UserIdentification";
import Confirmation from "../screens/Confirmation";
import { PlantSelect } from "../screens/PlantSelect";
import { PlantSave } from "../screens/PlantSave";

const StackRoutes = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <StackRoutes.Navigator
    screenOptions={{
      contentStyle: { backgroundColor: colors.white },
      headerShown: false,
    }}
  >
    <StackRoutes.Screen name="Welcome" component={Welcome} />
    <StackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    />
    <StackRoutes.Screen name="Confirmation" component={Confirmation} />
    <StackRoutes.Screen name="PlantSelect" component={PlantSelect} />
    <StackRoutes.Screen name="PlantSave" component={PlantSave} />
  </StackRoutes.Navigator>
);

export default AppRoutes;
