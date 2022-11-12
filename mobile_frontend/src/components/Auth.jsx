import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./authentication/Login";
import Register from "./authentication/Register";

export default function AuthNavigationStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
