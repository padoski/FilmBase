import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TabNavigator from "./navigation/TabNavigator";
import SafeAreaView from "react-native-safe-area-view";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Router from "./navigation/Route";

import TouchID from "react-native-touch-id";
import * as LocalAuthentication from "expo-local-authentication";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  // const optionalConfigObject = {
  //   title: "Authentication Required", // Android
  //   imageColor: "#e00606", // Android
  //   imageErrorColor: "#ff0000", // Android
  //   sensorDescription: "Touch sensor", // Android
  //   sensorErrorDescription: "Failed", // Android
  //   cancelText: "Cancel", // Android
  //   fallbackLabel: "Show Passcode", // iOS (if empty, then label is hidden)
  //   unifiedErrors: false, // use unified error messages (default false)
  //   passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  // };
  useEffect(() => {
    setIsAuth(LocalAuthentication.authenticateAsync());
    console.log(isAuth);
  }, []);

  // const handleBiometric = () => {
  //   TouchID.isSupported(optionalConfigObject).then((biometryType) => {
  //     if (biometryType === "FaceID") {
  //       console.log("FaceID is supported.");
  //     } else {
  //       console.log("TouchID is supported.");
  //       TouchID.authenticate(
  //         "to demo this react-native component",
  //         optionalConfigObject
  //       )
  //         .then((success) => {
  //           setIsAuth(true);
  //           AlertIOS.alert("Authenticated Successfully");
  //         })
  //         .catch((error) => {
  //           AlertIOS.alert("Authentication Failed");
  //         });
  //     }
  //   });
  // };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "always" }}>
        {/* <View style={styles.container}>
        // <Text>Open up App.js to start working on your app!</Text>
        // <StatusBar style="auto" />
        //{" "}
      </View> */}
        <Router />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
