import React, { useContext } from "react";
import Login from "../components/authentication/Login";
import AuthContext from "../context/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./BottomNav";
import AddIncident from "../components/IncidentManagement/AddIncident";
import ViewIncident from "../components/IncidentManagement/viewIncident";
import UpdateIncident from "../components/IncidentManagement/UpdateIncident";
import AddRequest from "../components/RequestManagement/AddRequest";
import AddVehicle from "../components/VehicleManagement/AddVehicle";
import VehicleList from "../components/VehicleManagement/VehicleList";
import ViewAllIncidents from "../components/IncidentManagement/viewAllIncidents"
import AddAction from "../components/IncidentManagement/AddAction"
import IncidentUpdate from "../components/IncidentManagement/IncidentUpdate";

function AppNav() {
  const { userType } = useContext(AuthContext);

  return (
    <>
      {userType === null && <ViewAllIncidents/>}
      {userType === "Site Manager" && (
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      )}
    </>
  );
}

export default AppNav;
