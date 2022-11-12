import React, { useContext } from "react";
//import Login from "../components/UserManagement/Login";
import AuthContext from "../context/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./BottomNav";
import AuthNavigationStack from "../components/Auth";

function AppNav() {
  const { userType } = useContext(AuthContext);

  return (
    <>
      {userType === null && <AuthNavigationStack />}
      {userType === "Site Manager" && (
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      )}
    </>
  );
}

export default AppNav;
