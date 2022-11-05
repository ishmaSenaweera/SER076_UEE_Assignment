import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VehicleList from "./VehicleManagement/VehicleList";
import AddVehicle from "./VehicleManagement/AddVehicle";

export default function VehicleNavigationStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="VehicleList" component={VehicleList} />
      <Stack.Screen name="AddVehicle" component={AddVehicle} />
    </Stack.Navigator>
  );
}
