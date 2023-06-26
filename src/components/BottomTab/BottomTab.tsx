import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import capitalize from "lodash/capitalize";
import { Center, HStack, Icon, Pressable, Text, View } from "native-base";
import React, { FC, memo, useEffect, useState } from "react";
import isEqual from "react-fast-compare";
import HomeScreen from "./Home";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

const PressableIcons: FC<{
  selected: number;
  indexNumber: number;
  setSelected: (value: React.SetStateAction<number>) => void;
  defaultName: string | any;
  outlineName: string | any;
  name: string;
}> = memo(
  ({ selected, setSelected, defaultName, outlineName, indexNumber, name }) => {
    const manageIndex = () => setSelected(indexNumber);

    return (
      <Pressable flex={1} onPress={manageIndex}>
        <Center>
          <Icon
            mr="2"
            mb="1"
            as={
              // <MaterialIcons
              //   name={selected === indexNumber ? defaultName : outlineName}
              // />
              <Ionicons
                name={selected === indexNumber ? defaultName : outlineName}
              />
            }
            color="white"
            size="lg"
          />
          <Text mr="2" color="white" fontSize="12">
            {capitalize(name)}
          </Text>
        </Center>
      </Pressable>
    );
  },
  isEqual
);

const BottomNavigation = memo((props: any) => {
  const [selected, setSelected] = useState(0);
  const { navigate } = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (selected === 0 && props.state.index !== 0) {
      // @ts-ignore
      navigate("Home");
      setSelected(0);
    }

    if (selected === 1 && props.state.index !== 1) {
      // @ts-ignore
      navigate("Reports");
      setSelected(1);
    }
  }, [selected, props.state, isFocused]);

  return (
    <>
      <View bg={"white"}>
        <HStack
          p={1.5}
          mb={2}
          bg="darkBlue.300"
          alignItems="center"
          borderRadius={"25"}
          w={"95%"}
          alignSelf={"center"}
        >
          <PressableIcons
            selected={selected}
            setSelected={setSelected}
            defaultName="home"
            outlineName="home-outline"
            indexNumber={0}
            name="Home"
          />
          {/* <PressableIcons
            selected={selected}
            setSelected={setSelected}
            defaultName="scan-circle"
            outlineName="scan-circle-outline"
            indexNumber={1}
            name=""
          /> */}
          {/* <TouchableOpacity>
            <MaterialIcons name="qr-code-scanner" size={35} color="white" />
          </TouchableOpacity> */}
          {/* <PressableIcons
            selected={selected}
            setSelected={setSelected}
            defaultName="wallet"
            outlineName="wallet-outline"
            indexNumber={2}
            name="Transaction"
          /> */}
          <PressableIcons
            selected={selected}
            setSelected={setSelected}
            defaultName="document-text"
            outlineName="document-text-outline"
            indexNumber={1}
            name="Reports"
          />
        </HStack>
      </View>
    </>
  );
}, isEqual);

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomNavigation {...props} />}
      screenOptions={{ headerShown: false }}
      initialRouteName={"Home"}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="Dining" component={DiningScreen} /> */}
      {/* <Tab.Screen name="Transaction" component={Transaction} /> */}
    </Tab.Navigator>
  );
};

export default BottomTab;
