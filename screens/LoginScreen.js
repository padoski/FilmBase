import React, { useState, useLayoutEffect, useEffect } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Logowanie",
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/8b/51/68/8b5168873a2cddcdee83c662ea0ed261.png",
        }}
        style={{ width: 180, height: 180 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="E-mail"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Input
          placeholder="Hasło"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={singIn}
        />

        <Button
          onPress={singIn}
          buttonStyle={{ backgroundColor: "#fb9327" }}
          containerStyle={styles.button}
          title="Zaloguj"
        />

        <Button
          onPress={() => navigation.navigate("Register")}
          titleStyle={{ color: "#fcbb39" }}
          buttonStyle={{ borderColor: "#fb9327" }}
          containerStyle={styles.button}
          type="outline"
          title="Zarejestruj"
        />
      </View>
      <View style={{ height: 10 }}></View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  inputContainer: {
    width: 300,
    alignItems: "center",
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
