import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RequestList from "./RequestManagement/RequestList";
import AddRequest from "./RequestManagement/AddRequest";
import ViewRequestInfo from "./RequestManagement/ViewRequestInfo";

export default function RequestNavigationStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="RequestList" component={RequestList} />
      <Stack.Screen name="AddRequest" component={AddRequest} />
      <Stack.Screen name="ViewRequestInfo" component={ViewRequestInfo} />
    </Stack.Navigator>
  );
}
