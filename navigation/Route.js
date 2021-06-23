import React from "react";
import TabNavigator from "./TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddMovie from "../screens/addMovie";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
const Stack = createStackNavigator();
const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} /> */}
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{
            headerTitleStyle: { alignSelf: "center" },
            title: "Filmy",
          }}
        />
        <Stack.Screen
          name="AddMovie"
          component={AddMovie}
          options={{
            headerTitleStyle: { alignSelf: "center" },
            title: "Dodaj film",
          }}
        />
        <Stack.Screen
          name="MovieDetailsScreen"
          component={MovieDetailsScreen}
          options={{
            headerTitleStyle: { alignSelf: "center" },
            title: "Zarządzaj filmem",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
