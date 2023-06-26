import {
  View,
  Text,
  Box,
  Image,
  ScrollView,
  VStack,
  Button,
} from "native-base";
import React from "react";
import { ImageBackground } from "react-native";

const logo = require("../../../assets/logo1.png");
const earing = require("../../../assets/earings.png");

// const OngoingCard: React.FC<{
//   name: string;
//   duration: string;
//   datetime: string;
//   vanue: string;
// }> = ({ name, duration, datetime, vanue }) => {
//   return (
//     <>
//       <VStack
//         space={2}
//         p={2}
//         w={"72"}
//         shadow={3}
//         borderWidth={0.5}
//         borderColor={"darkBlue.300"}
//         style={{ shadowColor: "blue" }}
//         borderRadius={"15"}
//         bg={"white"}
//       >
//         <Text
//           fontWeight={"medium"}
//           fontSize={"lg"}
//           color={"amber.600"}
//           alignSelf={"center"}
//         >
//           {name}
//         </Text>
//         <HStack w={"100%"}>
//           <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
//             Duration
//           </Text>
//           <Text w={"5%"}>:</Text>
//           <Text w={"65%"}>{duration}</Text>
//         </HStack>
//         <HStack w={"100%"}>
//           <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
//             Date & Time
//           </Text>
//           <Text w={"5%"}>:</Text>
//           <Text w={"65%"}>{datetime}</Text>
//         </HStack>
//         <HStack w={"100%"}>
//           <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
//             Venue
//           </Text>
//           <Text w={"5%"}>:</Text>
//           <Text w={"60%"}>{vanue}</Text>
//         </HStack>
//       </VStack>
//     </>
//   );
// };

const Home = () => {
  return (
    <View bg={"white"} flex={1}>
      <Box
        bg={"orange.400"}
        w={"full"}
        borderBottomRadius={40}
        alignSelf={"center"}
      >
        <Image
          h={"20"}
          w={"20"}
          resizeMode="contain"
          source={logo}
          alt="Logo"
        />
      </Box>
      <ScrollView mx={5} mt={5} mb={10}>
        <VStack
          space={2}
          p={2}
          w={"95%"}
          h={"40"}
          shadow={3}
          borderWidth={0.5}
          borderColor={"amber.600"}
          style={{ shadowColor: "#FFD54F" }}
          borderRadius={"15"}
          bg={"white"}
          alignItems={"center"}
          alignSelf={"center"}
        >
          <ImageBackground source={earing} />
          <Text fontWeight={"semibold"} fontSize={"lg"}>
            GREAT DEALS ON EARINGS!!!
          </Text>
          <Text fontSize={"lg"}>
            SHOP FOR 5000 AND RECEIVE DISCOUNT OF 250 ON CART
          </Text>
          <Button mb={2} borderRadius={10} bg={"pink.400"}>
            Shop Now
          </Button>
        </VStack>
      </ScrollView>
    </View>
  );
};

export default Home;
