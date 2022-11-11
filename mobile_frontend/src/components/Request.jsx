import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RequestList from "./RequestManagement/RequestList";
import AddRequest from "./RequestManagement/AddRequest";
import ViewRequestInfo from "./RequestManagement/ViewRequestInfo";
import ViewRequest from "./RequestManagement/ViewRequest";
import ViewStatus from "./RequestManagement/ViewStatus";
import RideSummary from "./RequestManagement/RideSummary";
import UpdateRequest from "./RequestManagement/UpdateRequest";

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
      <Stack.Screen name="ViewRequest" component={ViewRequest} />
      <Stack.Screen name="ViewStatus" component={ViewStatus} />
      <Stack.Screen name="RideSummary" component={RideSummary} />
      <Stack.Screen name="UpdateRequest" component={UpdateRequest} />
    </Stack.Navigator>
  );
}
