import React, { useLayoutEffect, useState } from "react";
import { View, Text } from "react-native";
import Watched from "../screens/watched";
import UnWatched from "../screens/unwatched";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { auth, db } from "../firebase";
import { TouchableOpacity } from "react-native-gesture-handler";
const Tab = createMaterialTopTabNavigator();

const TabNavigator = ({ navigation }) => {
  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Twoje filmy",
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerRight: () => (
        <View>
          <TouchableOpacity
            onPress={signOutUser}
            activeOpacity={0.5}
            pressMagnification={0.5}
          >
            <AntDesign
              name="logout"
              size={24}
              color="black"
              style={{ marginRight: 20 }}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    // <View>
    //   <Text>Tab Navigator screen</Text>
    // </View>

    <Tab.Navigator>
      <Tab.Screen name="Obejrzane" component={Watched} />
      <Tab.Screen name="Nie obejrzane" component={UnWatched} />
    </Tab.Navigator>
  );
};
export default TabNavigator;
