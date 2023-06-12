import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider, StatusBar, extendTheme } from "native-base";
import React, { memo, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

import {
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
  useFonts,
} from "@expo-google-fonts/quicksand";
import AppLoading from "expo-app-loading";
import Routes from "./src/Routes";
import { SafeAreaView } from "react-native";
import useBase_url from "./src/components/context/UseContext";

const App = () => {
  const [baseUrl, setBaseUrl] = useState(
    "https://naples-equipped-fever-tragedy.trycloudflare.com"
  );

  const [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  const theme = extendTheme({
    fontConfig: {
      quicksand: {
        300: {
          normal: "Quicksand_300Regular",
        },
        400: {
          normal: "Quicksand_400Regular",
        },
        500: {
          normal: "Quicksand_500Medium",
        },
        600: {
          normal: "Quicksand_600SemiBold",
        },
        700: {
          normal: "Quicksand_700Bold",
        },
      },
    },
    fonts: {
      heading: "quicksand",
      body: "quicksand",
      mono: "quicksand",
    },
    colors: {
      black: {
        50: "#eceef9",
        100: "#c5cbec",
        200: "#D3D3D3",
        300: "#808080",
        400: "#696969",
        500: "#5263c6",
        600: "#313031",
        700: "#4B4953",
        800: "#322E32",
        900: "#211F21",
      },
    },
  });

  React.useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <useBase_url.Provider value={baseUrl}>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer onReady={onLayoutRootView}>
            <SafeAreaProvider>
              <SafeAreaView style={{ flex: 1 }}>
                <StatusBar hidden={false} />
                <Routes />
              </SafeAreaView>
            </SafeAreaProvider>
          </NavigationContainer>
        </NativeBaseProvider>
      </useBase_url.Provider>
    </>
  );
};

export default memo(App);
