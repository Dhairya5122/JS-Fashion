import {} from "react-native";
import React, { useEffect, useState } from "react";
import { Box, View, Text, Image, Button } from "native-base";
import Lottie from "lottie-react-native";

import { useNavigation } from "@react-navigation/native";

const logo = require("../../../assets/logo2.png");
const mainlogo = require("../../../assets/logo-white.png");

const Welcome = () => {
  const { navigate } = useNavigation();
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    // Simulate animation finish after 3 seconds (for demonstration purposes)
    const timer = setTimeout(() => {
      setAnimationFinished(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const signin = () => {
    //@ts-ignore
    navigate("Login");
  };

  const signup = () => {
    //@ts-ignore
    navigate("Signup");
  };

  return (
    <View bg={"#313031"} h={"full"}>
      <Box
        width={10}
        height={0}
        bg="transparent"
        borderStyle="solid"
        borderLeftWidth={190}
        borderRightWidth={150}
        borderBottomWidth={300}
        borderLeftColor="transparent"
        borderRightColor="transparent"
        borderBottomColor="white"
        ml={"-32"}
        mt={"-9"}
        style={{ transform: [{ rotate: "190deg" }] }}
      />

      <Image
        source={logo}
        alt=""
        resizeMode="contain"
        h={"32"}
        w={"32"}
        mt={"-56"}
        ml={"-3"}
      />
      {!animationFinished ? (
        <Lottie
          source={require("../../../assets/Lottie_Login/133076-welcome.json")}
          autoPlay
          loop={false}
          onAnimationFinish={() => setAnimationFinished(true)}
        />
      ) : (
        <>
          <Box alignItems={"center"} justifyContent={"center"}>
            <Text
              mt={"12"}
              fontSize={"5xl"}
              color={"white"}
              fontWeight={"semibold"}
            >
              Welcome To
            </Text>
            <Text color={"white"} fontSize={"3xl"}>
              The World Of The Reality
            </Text>
            <Image
              source={mainlogo}
              alt=""
              resizeMode="contain"
              h={"64"}
              w={"64"}
            />
          </Box>
          <Box alignItems={"center"} justifyContent={"center"}>
            <Button onPress={signin} w={"50%"} bg={"white"} borderRadius={15}>
              <Text fontSize={"16"} fontWeight={"semibold"}>
                Already A User ?
              </Text>
            </Button>
            <Button
              onPress={signup}
              w={"50%"}
              bg={"white"}
              borderRadius={15}
              mt={5}
              mb={5}
            >
              <Text fontSize={"16"} fontWeight={"semibold"}>
                Sign Up
              </Text>
            </Button>
          </Box>
        </>
      )}
    </View>
  );
};

export default Welcome;
