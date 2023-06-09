import { View, Text, ScrollView, Box, Pressable, Button } from "native-base";
import React, { memo } from "react";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const Welcome2 = () => {
  const { navigate } = useNavigation();

  const welcome4 = () => {
    //@ts-ignore
    navigate("welcome4");
  };

  const welcome2 = () => {
    //@ts-ignore
    navigate("welcome3");
  };

  return (
    <ScrollView bg={"blue.400"}>
      <View m={5}>
        <Pressable onPress={welcome4}>
          <Text fontSize={"xl"} color={"white"}>
            SKIP
          </Text>
        </Pressable>
        <Box h={"96"} w={"96"} alignSelf={"center"}>
          <Lottie
            resizeMode="contain"
            source={require("../../../assets/Lottie_Login/112889-otz-webshop.json")}
            autoPlay
          />
        </Box>
        <Text w={"80"} mt={10} fontSize={"3xl"} color={"white"}>
          OUR MOTTO IS TO DELIVER THE BEST AND DIFFERENT FROM OTHERS
        </Text>
        <Text color={"white"} fontSize={"4xl"} fontWeight={"semibold"}>
          EXPLORE US !!!
        </Text>
        <Button
          bg={"#313031"}
          w={"24"}
          mt={5}
          borderRadius={10}
          onPress={welcome2}
        >
          <Text color={"white"} fontSize={"xl"} fontWeight={"semi-bold"}>
            Next
          </Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default memo(Welcome2);
