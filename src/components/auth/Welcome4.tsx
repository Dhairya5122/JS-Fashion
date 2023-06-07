import { View, Text, ScrollView, Box, Image, Button } from "native-base";
import React, { memo } from "react";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const logo = require("../../../assets/logo-white.png");

const Welcome4 = () => {
  const { navigate } = useNavigation();
  const signin = () => {
    navigate();
  };
  const signup = () => {
    navigate();
  };

  return (
    <ScrollView bg={"coolGray.800"}>
      <View m={5} alignItems={"center"} justifyContent={"center"}>
        <Box h={"32"} w={"96"} mt={20} alignSelf={"center"}>
          <Lottie
            resizeMode="contain"
            source={require("../../../assets/Lottie_Login/39755-handwritten-welcome-new.json")}
            autoPlay
            loop={false}
          />
        </Box>
        <Text color={"white"} fontSize={"2xl"} fontWeight={"semi-bold"}>
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
          <Button onPress={signin} w={"60%"} bg={"white"} borderRadius={15}>
            <Text fontSize={"20"} fontWeight={"semibold"}>
              Already A User ?
            </Text>
          </Button>
          <Button onPress={signup} bg={"white"} borderRadius={15} mt={5} mb={5}>
            <Text fontSize={"20"} fontWeight={"semibold"}>
              Sign Up
            </Text>
          </Button>
        </Box>
      </View>
    </ScrollView>
  );
};

export default memo(Welcome4);
