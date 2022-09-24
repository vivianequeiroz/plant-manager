import React from "react";

import colors from "../styles/colors";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import UserIdentification from "../screens/UserIdentification";
import Confirmation from "../screens/Confirmation";

const Stack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: colors.white },
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="UserIdentification" component={UserIdentification} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
