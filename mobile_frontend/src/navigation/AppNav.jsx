import React, { useContext } from "react";
import Login from "../components/authentication/Login";
import AuthContext from "../context/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./BottomNav";
import AddAction from "../components/IncidentManagement/addAction";
import UpdateAction from "../components/IncidentManagement/updateAction";
import AddIncident from "../components/IncidentManagement/AddIncident";
import ViewIncident from "../components/IncidentManagement/viewIncident";
import ViewAllIncidents from "../components/IncidentManagement/viewAllIncidents";
import RequestList from "../components/RequestManagement/RequestList";
import UpdateIncident from "../components/IncidentManagement/UpdateIncident";

function AppNav() {
  const { userType } = useContext(AuthContext);

  return (
    <>
      {userType === null && <ViewAllIncidents />}
      {userType === "Site Manager" && (
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      )}
    </>
  );
}

export default AppNav;
