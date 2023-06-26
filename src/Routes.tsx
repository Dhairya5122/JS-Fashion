import Login from "./components/auth/Login";
import React, { useState, useEffect, lazy, Suspense } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import { Text } from "native-base";
import Welcome1 from "./components/auth/Welcome1";
import Welcome2 from "./components/auth/Welcome2";
// import Welcome3 from "./components/auth/Welcome3";
import Welcome4 from "./components/auth/Welcome4";
import BottomTab from "./components/BottomTab/BottomTab";

//@ts-ignore
const Welcome = lazy(() => import("./components/auth/Welcome"));
//@ts-ignore
const Signup = lazy(() => import("./components/auth/Signup"));

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="welcome4"
          component={Welcome4}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="welcome1"
          component={Welcome1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="welcome2"
          component={Welcome2}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="welcome3"
          component={Welcome3}
          options={{ headerShown: false }}
        /> */}

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
    </Suspense>
  );
};

export default Routes;
