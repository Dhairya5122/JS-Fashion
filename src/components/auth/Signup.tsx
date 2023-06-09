import {} from "react-native";
import React, { memo } from "react";
import {
  Box,
  Image,
  View,
  Text,
  VStack,
  Button,
  Input,
  ScrollView,
} from "native-base";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import Lottie from "lottie-react-native";

const logo = require("../../../assets/logo2.png");
const LoginSchema = Yup.object().shape({
  name: Yup.string().required(),
  username: Yup.string().required(),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Signup = () => {
  const { navigate } = useNavigation();
  const handleSubmit = () => {
    //@ts-ignore
    navigate("BottomTab");
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        username: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View bg={"pink.400"} h={"full"}>
          <ScrollView mb={10}>
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

            <Box alignItems={"center"} justifyContent={"center"}>
              <Box h={"32"} w={"32"}>
                <Lottie
                  resizeMode="cover"
                  source={require("../../../assets/Lottie_Login/78801-login.json")}
                  autoPlay
                  loop
                />
              </Box>
              <Text color={"white"} fontSize={"6xl"} fontWeight={"semi-bold"}>
                SIGNUP
              </Text>
              <Text
                mb={10}
                color={"white"}
                fontSize={"lg"}
                fontWeight={"semibold"}
              >
                To Explore Our Services More Deeply
              </Text>
              <Box>
                <Text color={"white"} fontSize={"lg"} mb={2} mt={2}>
                  Name
                </Text>
                <Input
                  w={"90%"}
                  bg={"white"}
                  bgColor={"white"}
                  borderRadius={10}
                  borderColor={"#313031"}
                  placeholder="Your Name"
                  value={values.name}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  fontSize={"20"}
                />

                {touched.name && errors.name && (
                  <Text style={{ color: "red" }}>{errors.name}</Text>
                )}

                <Text color={"white"} fontSize={"lg"} mb={2} mt={4}>
                  User Name
                </Text>
                <Input
                  w={"90%"}
                  bg={"white"}
                  bgColor={"white"}
                  borderRadius={10}
                  borderColor={"#313031"}
                  placeholder="Enter UserName"
                  value={values.username}
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  fontSize={"20"}
                />

                {touched.username && errors.username && (
                  <Text style={{ color: "red" }}>{errors.username}</Text>
                )}
                <Text color={"white"} fontSize={"lg"} mb={2} mt={4}>
                  Enter Email Address
                </Text>
                <Input
                  w={"90%"}
                  bg={"white"}
                  bgColor={"white"}
                  borderRadius={10}
                  borderColor={"#313031"}
                  placeholder="Email"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  fontSize={"20"}
                />

                {touched.email && errors.email && (
                  <Text style={{ color: "red" }}>{errors.email}</Text>
                )}

                <Text color={"white"} fontSize={"lg"} mt={4} mb={2}>
                  Enter Password
                </Text>
                <Input
                  w={"90%"}
                  bg={"white"}
                  bgColor={"white"}
                  borderRadius={10}
                  type="password"
                  borderColor={"#313031"}
                  placeholder="Password"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  secureTextEntry
                  fontSize={"20"}
                />
                {touched.password && errors.password && (
                  <Text style={{ color: "red" }}>{errors.password}</Text>
                )}
                <Button
                  w={"24"}
                  borderRadius={20}
                  alignSelf={"center"}
                  bg={"white"}
                  mt={10}
                  //@ts-ignore
                  onPress={handleSubmit}
                >
                  <Text
                    alignSelf={"center"}
                    color={"black"}
                    fontWeight={"semibold"}
                    fontSize={"lg"}
                  >
                    SIGNUP
                  </Text>
                </Button>
              </Box>
            </Box>
          </ScrollView>
        </View>
      )}
    </Formik>
  );
};

export default memo(Signup);
