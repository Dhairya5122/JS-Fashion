import {} from "react-native";
import React, { memo, useContext, useState } from "react";
import {
  Box,
  Image,
  View,
  Text,
  VStack,
  Button,
  Input,
  ScrollView,
  Alert,
  useToast,
  HStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import Lottie from "lottie-react-native";
import { useFetch } from "use-http";
import useBase_url from "../context/UseContext";
import isEqual from "react-fast-compare";

const logo = require("../../../assets/logo2.png");

export interface Root {
  success: boolean;
  msg: string;
  data: Data;
}

export interface Data {
  username: string;
  name: string;
  mobile: string;
  email: string;
  password: string;
}

const initialvalues = {
  username: "",
  name: "",
  mobile: "",
  email: "",
  password: "",
} as Data;

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  username: Yup.string().required("Username is required"),
  name: Yup.string().required("Name is required"),
  mobile: Yup.string().required("Mobile is required"),
});

const Signup = () => {
  const [key, setKey] = useState(Math.random());
  const toast = useToast();
  const { navigate } = useNavigation();
  const baseUrl = useContext(useBase_url);

  const { get, post, response, error } = useFetch(`${baseUrl}/api/register`);

  const handleSubmit = async (
    val: typeof initialvalues,
    actions: FormikHelpers<typeof initialvalues>
  ) => {
    try {
      actions.setSubmitting(true);

      const res = (await post(val)) as Root;

      if (res.success) {
        console.log(res.data);
        toast.show({
          render: () => (
            <Alert status="success">
              <HStack space={2} alignItems={"center"} justifyContent={"center"}>
                <Alert.Icon />

                <Text>{res.msg}</Text>
              </HStack>
            </Alert>
          ),
          placement: "top",
        });
        //@ts-ignore
        navigate("welcome1");
      } else {
        toast.show({
          render: () => (
            <Alert status="error">
              <Alert.Icon />
              <Text>{res.msg}</Text>
            </Alert>
          ),
          placement: "top",
        });
        console.log(res.msg);
      }

      actions.setSubmitting(false);

      setKey(Math.random());
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Formik
      initialValues={initialvalues}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
      key={key}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View bg={"pink.400"} h={"full"} mb={10}>
          <ScrollView>
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
                SIGN UP
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
                <Text color={"white"} fontSize={"lg"} mb={2}>
                  UserName
                </Text>
                <Input
                  w={"90%"}
                  bg={"white"}
                  bgColor={"white"}
                  borderRadius={10}
                  borderColor={"#313031"}
                  placeholder="Enter UserName"
                  value={values.username}
                  fontSize={"20"}
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                />

                {touched.username && errors.username && (
                  <Text style={{ color: "red" }}>{errors.username}</Text>
                )}

                <Text color={"white"} fontSize={"lg"} mb={2}>
                  Enter Name
                </Text>
                <Input
                  w={"90%"}
                  bg={"white"}
                  bgColor={"white"}
                  borderRadius={10}
                  borderColor={"#313031"}
                  placeholder="Enter Name"
                  value={values.name}
                  fontSize={"20"}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                />

                {touched.name && errors.name && (
                  <Text style={{ color: "red" }}>{errors.name}</Text>
                )}

                <Text color={"white"} fontSize={"lg"} mb={2}>
                  Enter Mobile Number
                </Text>
                <Input
                  w={"90%"}
                  bg={"white"}
                  bgColor={"white"}
                  borderRadius={10}
                  borderColor={"#313031"}
                  placeholder="Enter Mobile Number"
                  value={values.mobile}
                  fontSize={"20"}
                  onChangeText={handleChange("mobile")}
                  onBlur={handleBlur("mobile")}
                />

                {touched.mobile && errors.mobile && (
                  <Text style={{ color: "red" }}>{errors.mobile}</Text>
                )}

                <Text color={"white"} fontSize={"lg"} mb={2}>
                  Enter Email
                </Text>
                <Input
                  w={"90%"}
                  bg={"white"}
                  bgColor={"white"}
                  borderRadius={10}
                  borderColor={"#313031"}
                  placeholder="Enter Email"
                  value={values.email}
                  fontSize={"20"}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                />

                {touched.email && errors.email && (
                  <Text style={{ color: "red" }}>{errors.email}</Text>
                )}

                <Text color={"white"} fontSize={"lg"} mt={2} mb={2}>
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
                  fontSize={"20"}
                  secureTextEntry
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
                  mb={10}
                  borderWidth={1}
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

export default memo(Signup, isEqual);
