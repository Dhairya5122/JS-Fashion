import { View, Text, ScrollView, Box, Pressable, Button } from "native-base";
import React, { memo } from "react";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const Welcome3 = () => {
  const { navigate } = useNavigation();

  const login = () => {
    //@ts-ignore
    navigate("Login");
  };

  const welcome3 = () => {
    //@ts-ignore
    navigate("welcome3");
  };

  return (
    <ScrollView bg={"amber.500"}>
      <View m={5}>
        <Pressable onPress={login}>
          <Text fontSize={"xl"} color={"white"}>
            SKIP
          </Text>
        </Pressable>
        <Box h={"96"} w={"96"} alignSelf={"center"}>
          <Lottie
            resizeMode="contain"
            source={require("../../../assets/Lottie_Login/90698-online-investment.json")}
            autoPlay
          />
        </Box>
        <Text w={"80"} mt={10} fontSize={"3xl"} color={"white"}>
          WE ALSO LOOK FOR CUSTOMER POCKET ON SAVINGS
        </Text>
        <Text color={"white"} fontSize={"4xl"} fontWeight={"semibold"}>
          EXPLORE US !!!
        </Text>
        <Button
          bg={"#313031"}
          w={"24"}
          mt={5}
          borderRadius={10}
          onPress={welcome3}
        >
          <Text color={"white"} fontSize={"xl"} fontWeight={"semi-bold"}>
            Next
          </Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default memo(Welcome3);
