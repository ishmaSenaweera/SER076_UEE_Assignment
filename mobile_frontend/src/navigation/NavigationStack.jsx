import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViewProducts from "../components/Product/ViewProducts";
import ViewProduct from "../components/Product/ViewProduct";
import {createStackNavigator} from '@react-navigation/stack';
import Login from "../components/UserManagement/auth/Login";

const {Navigator, Screen} = createStackNavigator();

export default function NavigationStack() {
  
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="ViewProducts" component={Login} />
        <Screen name="ViewProduct" component={ViewProduct} />
      </Navigator>
    </NavigationContainer>
  );
}
