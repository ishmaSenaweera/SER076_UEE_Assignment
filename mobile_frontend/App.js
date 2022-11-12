import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AuthContextProvider } from "./src/context/UserContext";
import AppNav from "./src/navigation/AppNav";

function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <AppNav />
      </AuthContextProvider>
    </NavigationContainer>
  );
}

export default App;
