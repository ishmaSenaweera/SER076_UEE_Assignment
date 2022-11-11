import React, { useContext } from "react";
import Login from "../components/authentication/Login";
import AuthContext from "../context/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./BottomNav";
import AddIncident from "../components/IncidentManagement/AddIncident";
import ViewIncident from "../components/IncidentManagement/viewIncident";
import ViewReport from "../components/IncidentManagement/ViewReport";
import UpdateIncident from "../components/IncidentManagement/UpdateIncident";



function AppNav() {
  const { userType } = useContext(AuthContext);

  return (
    <>
      {userType === null && <ViewReport/>}
      {userType === "Site Manager" && (
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      )}
    </>
  );
}

export default AppNav;
