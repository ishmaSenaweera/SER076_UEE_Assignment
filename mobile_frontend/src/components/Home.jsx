import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RequestNavigationStack from "./Request";
import VehicleNavigationStack from "./Vehicle";
import Home from "./vehicleManagement/Home";
import Reward from "./vehicleManagement/Reward";

export default function HomeNavigationStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home1" component={Home} />
      <Stack.Screen name="Request" component={RequestNavigationStack} />
      <Stack.Screen name="Vehicle" component={VehicleNavigationStack} />
      <Stack.Screen name="Incident" component={VehicleNavigationStack} />
      <Stack.Screen name="User" component={VehicleNavigationStack} />
      <Stack.Screen name="Reward" component={Reward} />
    </Stack.Navigator>
  );
}
