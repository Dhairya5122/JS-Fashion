import { View, Text, ScrollView, Box, Image, Button } from "native-base";
import React, { memo } from "react";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import isEqual from "react-fast-compare";

const logo = require("../../../assets/logo-black.png");
const yamunaji = require("../../../assets/yamunaji.png");
const Welcome4 = () => {
  const { navigate } = useNavigation();

  const signin = () => {
    //@ts-ignore
    navigate("Login");
  };
  const signup = () => {
    //@ts-ignore
    navigate("Signup");
  };

  return (
    <ScrollView bg={"white"}>
      <Box
        position={"absolute"}
        h={"full"}
        alignItems={"center"}
        opacity={0.19}
      >
        <Lottie
          resizeMode="cover"
          source={require("../../../assets/Lottie_Login/82095-additional-animated-blue-background.json")}
          autoPlay
        />
        <Image source={yamunaji} alt="" alignSelf={"center"} mt={"50%"} />
      </Box>
      <View m={5} alignItems={"center"} justifyContent={"center"}>
        <Box h={"32"} w={"96"} mt={20} alignSelf={"center"}>
          <Lottie
            resizeMode="contain"
            source={require("../../../assets/Lottie_Login/39755-handwritten-welcome-new.json")}
            autoPlay
            loop={false}
          />
        </Box>
        <Text color={"black"} fontSize={"2xl"} fontWeight={"semi-bold"}>
          TO THE
        </Text>
        <Image
          source={logo}
          alt="logo"
          resizeMode="contain"
          w={"96"}
          h={"96"}
        />

        <Box>
          <Button onPress={signin} w={"60%"} bg={"blue.400"} borderRadius={15}>
            <Text color={"white"} fontSize={"20"} fontWeight={"semibold"}>
              Already A User ?
            </Text>
          </Button>
          <Button
            onPress={signup}
            bg={"pink.400"}
            borderRadius={15}
            mt={5}
            mb={5}
          >
            <Text color={"white"} fontSize={"20"} fontWeight={"semibold"}>
              Sign Up
            </Text>
          </Button>
        </Box>
      </View>
    </ScrollView>
  );
};

export default memo(Welcome4, isEqual);
