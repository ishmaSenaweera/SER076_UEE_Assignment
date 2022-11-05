import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import Login from "../components/UserManagement/auth/Login";
import Register from "../components/UserManagement/auth/Register";
import RequestNavigationStack from "../components/Request";
import VehicleNavigationStack from "../components/Vehicle";
import RideSummary from "../components/RequestManagement/RideSummary";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          display: "flex",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 10,
          backgroundColor: "#D5BEFF",
          borderTopWidth: 2,
          borderLeftWidth: 2,
          borderRightWidth: 2,
          borderTopColor: "#D3D3D3",
          borderLeftColor: "#D3D3D3",
          borderRightColor: "#D3D3D3",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="code"
              color={focused ? "#000000" : "#585858"}
              iconStyle={{ marginRight: 10 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="code"
              color={focused ? "#000000" : "#585858"}
              iconStyle={{ marginRight: 10 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={RequestNavigationStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              color={focused ? "#000000" : "#585858"}
              iconStyle={{ marginRight: 10 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Request"
        component={RequestNavigationStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="collections-bookmark"
              color={focused ? "#000000" : "#585858"}
              iconStyle={{ marginRight: 10 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Vehicle"
        component={VehicleNavigationStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="directions-car"
              color={focused ? "#000000" : "#585858"}
              iconStyle={{ marginRight: 10 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Incident"
        component={RideSummary}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="warning"
              color={focused ? "#000000" : "#585858"}
              iconStyle={{ marginRight: 10 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={RequestNavigationStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="person"
              color={focused ? "#000000" : "#585858"}
              iconStyle={{ marginRight: 10 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
