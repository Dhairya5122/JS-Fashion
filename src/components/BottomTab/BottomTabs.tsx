import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Provider as PaperProvider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Import your screens here

import Home from "./Home";
import Profile from "./Profile";
import { View } from "native-base";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#313031"
        inactiveColor="#fff"
        barStyle={{ backgroundColor: "#313031" }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Settings"
          component={Home}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color }) => (
              <Icon name="cog" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </PaperProvider>
  );
}
